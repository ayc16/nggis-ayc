import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-single-select',
  standalone: true,
  imports: [NgSelectModule, CommonModule, FormsModule],
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.scss'
})
export class SingleSelectComponent {
  @Input() tooltip: any;
  @Input() title: any;
  @Input() options: any;
  @Input() selectedItem: any;
  @Input() valueField = 'text';
  @Input() displayField = 'text';

  @Output() selectedItemsChanged = new EventEmitter<any>();

  onSelectionChanged($event: Event) {
    this.selectedItemsChanged.emit($event);
  }
}
