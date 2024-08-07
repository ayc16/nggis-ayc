import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultiSelectComponent } from '../multi-select/multi-select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown-filter',
  standalone: true,
  imports: [MultiSelectComponent, CommonModule],
  templateUrl: './dropdown-filter.component.html',
  styleUrl: './dropdown-filter.component.scss'
})
export class DropdownFilterComponent {
  @Input() ShowFilter: boolean = true;
  @Input() title: any;
  @Input() options: any;
  @Input() itemsShowLimit: string = '2';
  @Input() selectedItems: any;
  @Input() valueField: any;
  @Input() displayField: any;

  @Output() selectedItemsChanged = new EventEmitter<any[]>();
}
