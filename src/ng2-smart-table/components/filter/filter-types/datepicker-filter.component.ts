import { Component } from '@angular/core';

import { IMyDateModel } from 'mydatepicker';

import { DefaultFilter } from './default-filter';

@Component({
  selector: 'datepicker-filter',
  template: `
    <my-date-picker (dateChanged)="onDateChanged($event)"></my-date-picker>
  `,
})
export class DatePickerFilterComponent extends DefaultFilter {

  constructor() {
    super();
  }

  onDateChanged(event: IMyDateModel) {
    this.query = event.jsdate.toLocaleDateString();
    this.setFilter();
  }
}