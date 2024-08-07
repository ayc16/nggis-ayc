import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EsriMapComponent } from "./esri-map/esri-map.component";
import { HeaderComponent } from "./header/header.component";
import { FluidHeightDirective } from './shared/fluid-height.directive';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NgxSpinnerComponent } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, EsriMapComponent, HeaderComponent, FluidHeightDirective, SidePanelComponent, NgxSpinnerComponent]
})
export class AppComponent {
  showPlatforms: boolean = true;
  showLegend: boolean = true;

  constructor() {

  }
}
