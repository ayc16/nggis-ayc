import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[fluidHeight]',
  standalone: true,
})
export class FluidHeightDirective implements AfterViewInit, OnDestroy {
  @Input() minHeight?: number;
  @Input('fluidHeight') topOffset?: number;
  @HostBinding('style.overflow-y') overflowY = 'auto';

  private domElement: HTMLElement;
  private resizeSub: Subscription;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    // get ref HTML element
    this.domElement = this.elementRef.nativeElement as HTMLElement;

    // register on window resize event
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(throttleTime(500), debounceTime(500))
      .subscribe(() => this.setHeight());
  }

  ngAfterViewInit() {
    //this.setHeight();
    //call after some time to get correct values else on first call it give wrong values due to getBoundingClientRect().top
    setTimeout(() => {
      this.setHeight();
    }, 1000);
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }

  private setHeight() {
    const windowHeight = window?.innerHeight;
    const topOffset = this.topOffset || this.calcTopOffset();
    let height = windowHeight / 1.06;
    //console.log(windowHeight, '-----windowHeight-----');
    //console.log(height, '----height------');
    //console.log(topOffset, '----topOffset------');

    if (this.minHeight && height < this.minHeight) {
      height = this.minHeight;
    }

    this.renderer.setStyle(this.domElement, 'height', `${height}px`);
  }

  private calcTopOffset(): number {
    try {
      const rect = this.domElement.getBoundingClientRect();
      //const scrollTop =
      //  window.pageYOffset || document.documentElement.scrollTop;
      const scrollTop = window.screenY || document.documentElement.scrollTop;
      return rect.top + scrollTop;
    } catch (e) {
      return 0;
    }
  }
}

