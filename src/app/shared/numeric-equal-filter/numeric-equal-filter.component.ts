import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterList, LayersOrWidgets, MapService } from '../map.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numeric-equal-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './numeric-equal-filter.component.html',
  styleUrl: './numeric-equal-filter.component.scss'
})
export class NumericEqualFilterComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  subscriptionP = new Subscription();
  constructor(private mapService: MapService) {

  }

  ngOnInit(): void {
    this.subscription = this.mapService.resetPlatformFilters$.subscribe((reset) => {
      if (reset == true && this.LayerType == LayersOrWidgets.PlatformLayer) {
        this.clearValues();//no need to apply filter as it will be reset gllobally
      }
    });
    this.subscriptionP = this.mapService.resetPipelineFilters$.subscribe((reset) => {
      if (reset == true && this.LayerType == LayersOrWidgets.PipelineLayer) {
        this.clearValues();//no need to apply filter as it will be reset gllobally
      }
    });
  }

  clearValues() {
    this.Value = null;
    this.filterApplied = false;
  }

  @Input() title = 'Filter Field';
  @Input() tooltip = 'Filter Field';
  @Input() LayerType: LayersOrWidgets = LayersOrWidgets.None;

  @Output() selectedItemsChanged = new EventEmitter<any>();

  Value: any = null;
  filterApplied: boolean = false;

  applyFilter() {
    this.filterApplied = true;
    let expression = "";
    // 50 means = 50
    if (this.Value != null) {
      expression = "= " + this.Value;
    }
    else//null values
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
    this.subscriptionP.unsubscribe();
  }
}
