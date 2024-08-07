import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterList, FiltersType } from '../map.service';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-numeric-filter',
  standalone: true,
  imports: [NgSelectModule, CommonModule, FormsModule],
  templateUrl: './numeric-filter.component.html',
  styleUrl: './numeric-filter.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NumericFilterComponent implements OnInit {
  @Input() title = 'Filter Field';
  @Input() tooltip = 'Filter Field';
  options: FilterList[] = [];

  @Output() selectedItemsChanged = new EventEmitter<any>();
  @Input() selectedItem: any = null;

  Value1: any = null;
  Value2: any = null;

  need2Values = false;
  value1Ok: null | boolean = null;
  value2Ok: null | boolean = null;
  allDataValid = false;

  ngOnInit() {
    this.options = Object.entries(RangeFilterType).map(([key, value]) => ({ text: value, value: key }));
  }
  onSelectionChanged($event: any) {
    if ($event == null) {
      this.value1Ok = null;
      this.value2Ok = null;
      this.resetFilter();
    }
    else {
      this.need2Values = $event == RangeFilterType.isBetween || $event == RangeFilterType.isNotBetween ? true : false;
      this.validateData();
    }
  }

  validateData() {
    if (this.Value1 != null && this.Value1 > -1) {
      this.value1Ok = true;
    }
    else
      this.value1Ok = false;

    if (this.need2Values) {
      if (this.Value2 != null && this.Value2 > -1) {
        this.value2Ok = true;
        if (this.Value1 >= this.Value2)
          this.value2Ok = false;
      }
      else
        this.value2Ok = false;
    }
    else
      this.value2Ok = false;

    return this.selectedItem != null && this.value1Ok && (!this.need2Values || this.value2Ok);
  }

  applyFilter() {
    if (this.validateData()) {
      let expression = "";
      switch (this.selectedItem) {
        case RangeFilterType.isBetween:
        case RangeFilterType.isNotBetween:
          expression = this.selectedItem + " " + this.Value1 + " AND " + this.Value2;
          break;
        default:
          expression = this.selectedItem + " " + this.Value1;
          break;
      }
      this.selectedItemsChanged.emit(expression);
    }
    else if (this.selectedItem != null) {//no need to reset for null selection. it's already done in selection change event
      this.resetFilter();
    }
  }
  resetFilter() {
    this.selectedItemsChanged.emit(null);//no filter
  }
}

export enum RangeFilterType {
  is = '=',
  isNot = '<>',
  isLessThan = '<',
  isAtMost = '<=',
  isGreaterThan = '>',
  isAtLeast = '>=',
  isBetween = 'between',
  isNotBetween = 'not between',
}
