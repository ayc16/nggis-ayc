import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MapService } from '../map.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, DatepickerComponent],
  templateUrl: './date-filter.component.html',
  styleUrl: './date-filter.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DateFilterComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(private mapService: MapService) {

  }

  ngOnInit(): void {
    this.subscription = this.mapService.resetPlatformFilters$.subscribe((reset) => {
      if (reset == true) {
        this.Value1 = null;
        this.Value2 = null;
      }
    });
  }
  @Input() title = 'Filter Field';
  @Input() tooltip = 'Filter Field';

  @Output() selectedItemsChanged = new EventEmitter<any>();

  Value1: NgbDateStruct | null = null;
  Value2: NgbDateStruct | null = null;

  value2Ok: null | boolean = null;

  DELIMITER = '-';

  setValue1($event: any) {
    this.Value1 = $event;
    this.applyFilter();
  }

  setValue2($event: any) {
    this.Value2 = $event;
    this.applyFilter();
  }

  resetValues() {
    this.Value1 = null;
    this.Value2 = null;
    this.resetFilter();
  }

  applyFilter() {
    this.value2Ok = true;
    let expression = "";
    // 50 and 100 means >=50 and <=100
    // 50 and blank means >=50
    // blank and 100 means  <=100
    if (this.Value1 != null && this.Value2 == null)//only left value is provided
    {
      expression = ">= " + this.toModel(this.Value1);
    }
    else if (this.Value1 != null && this.Value2 != null)//both are provided
    {
      let Date1 = new NgbDate(this.Value1.year, this.Value1.month, this.Value1.day);
      let Date2 = new NgbDate(this.Value2.year, this.Value2.month, this.Value2.day);
      if (Date2.before(Date1))
        this.value2Ok = false;//invalid range
      else {
        this.value2Ok = true;
        expression = "between " + this.toModel(this.Value1) + " AND " + this.toModel(this.Value2);
      }
    }
    else if (this.Value1 == null && this.Value2 != null)//right value is provided
    {
      expression = "<= " + this.toModel(this.Value2);
    }

    if (expression.length > 0)
      this.selectedItemsChanged.emit(expression);
    else//nothing is provided or ERROR
      this.resetFilter();

  }
  resetFilter() {
    this.selectedItemsChanged.emit(null);//no filter
  }

  toModel(date: NgbDateStruct | null): string | null {
    let datestr = date ? "'" + date.year.toString().padStart(4, "0") + this.DELIMITER + date.month.toString().padStart(2, "0") + this.DELIMITER + date.day.toString().padStart(2, "0") + "'" : null;
    return datestr ? "date " + datestr : null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
