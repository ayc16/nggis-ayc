import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NgMultiSelectDropDownModule, CommonModule, FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent implements OnInit {
  @Input() title = 'Multi Select';
  @Input() options = [];
  @Input() disabled = false;
  @Input() ShowFilter = true;
  @Input() itemsShowLimit: any = 3;
  @Input() enableCheckAll = true;
  @Input() limitSelection = -1;
  @Input() singleSelection = false;
  @Input() valueField = 'id';
  @Input() displayField = '';

  @Output() selectedItemsChanged = new EventEmitter<any[]>();
  @Input() selectedItems: any[] = [];

  selectedValues: [] = [];

  dropdownSettings: any = {};
  selExpanded = false;
  // selectedText: any = null;

  constructor(private fb: FormBuilder) { }

  writeValue(obj: any[]): void {
    console.log('from parent', obj);
    this.selectedItems = obj; // recieves values from Parent FormControl ctor, can be used for initial value
  }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: this.singleSelection,
      itemsShowLimit: this.itemsShowLimit,
      enableCheckAll: this.enableCheckAll,
      limitSelection: this.limitSelection,
      allowSearchFilter: this.ShowFilter,
      idField: this.valueField,
      textField: this.displayField,
    };
  }

  onSelectionChanged($event: any) {
    this.selectedValues = $event.map((x: any) => x.value);
    // if (selectedValues.length > 0) {
    //   this.selectedText = selectedValues.join(" (*) ");
    // }
    // else
    //   this.selectedText = null;
    this.selectedItemsChanged.emit($event);
  }
}

