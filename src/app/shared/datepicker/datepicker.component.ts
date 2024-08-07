import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NgbDatepickerModule, FormsModule, CommonModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent implements OnInit {
  today = inject(NgbCalendar).getToday();

  ngOnInit(): void {
    const current = new Date();
    this.minDate = { year: current.getFullYear() - 300, month: 1, day: 1 }; // to dispaly long year list at once
  }
  minDate: any;
  @Input() dateValue: NgbDateStruct | null = null;
  @Input() classInput = "";
  @Output() dateValueChanged: EventEmitter<any> = new EventEmitter();

  clearDate() {
    this.dateValue = null;
    this.dateValueChanged.emit(this.dateValue);
  }

  setToday() {
    this.dateValue = this.today;
    this.dateValueChanged.emit(this.dateValue);
  }
}
