import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MapService } from '../map.service';

@Component({
  selector: 'app-simple-numeric-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-numeric-filter.component.html',
  styleUrl: './simple-numeric-filter.component.scss'
})
export class SimpleNumericFilterComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(private mapService: MapService) {

  }

  ngOnInit(): void {
    this.subscription = this.mapService.resetPlatformFilters$.subscribe((reset) => {
      if (reset == true) {
        this.clearValues();//no need to apply filter as it will be reset gllobally
      }
    });
  }

  clearValues() {
    this.Value1 = null;
    this.Value2 = null;
    this.filterApplied = false;
  }

  @Input() title = 'Filter Field';
  @Input() tooltip = 'Filter Field';

  @Output() selectedItemsChanged = new EventEmitter<any>();

  Value1: any = null;
  Value2: any = null;

  value2Ok: null | boolean = null;
  filterApplied: boolean = false;

  applyFilter() {
    this.filterApplied = true;
    this.value2Ok = true;
    let expression = "";
    // 50 and 100 means >=50 and <=100
    // 50 and blank means >=50
    // blank and 100 means  <=100
    if (this.Value1 != null && this.Value2 == null)//only left value is provided
    {
      expression = ">= " + this.Value1;
    }
    else if (this.Value1 != null && this.Value2 != null)//both are provided
    {
      if (this.Value1 > this.Value2)
        this.value2Ok = false;//invalid range
      else {
        this.value2Ok = true;
        expression = "between " + this.Value1 + " AND " + this.Value2;
      }
    }
    else if (this.Value1 == null && this.Value2 != null)//right value is provided
    {
      expression = "<= " + this.Value2;
    }
    else//both null values
    {
      this.filterApplied = false;
    }

    if (expression.length > 0)
      this.selectedItemsChanged.emit(expression);
    else//nothing is provided or ERROR
      this.resetFilter();
  }
  resetFilter() {
    this.selectedItemsChanged.emit(null);//no filter
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}