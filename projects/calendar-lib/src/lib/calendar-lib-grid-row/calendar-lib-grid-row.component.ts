import { Component, Input, OnInit } from '@angular/core';
import { IRow } from '../models';

@Component({
  selector: 'lib-calendar-lib-grid-row',
  templateUrl: './calendar-lib-grid-row.component.html',
  styleUrls: ['./calendar-lib-grid-row.component.css']
})
export class CalendarLibGridRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _month: number = 1;
  private _year: number = 1;

  @Input()
  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    this._month = value;
    this.monthChanged();
  }

  @Input()
  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
    this.monthChanged();
  }

  @Input()
  input: IRow = { name: "", key: "" };

  @Input()
  public columnWidth: number = 0;

  @Input()
  public rowHeaderColumnWidth: number = 0;

  public daysInMonth: number[] = [];

  private monthChanged() {
    this.daysInMonth = [];
    let nods = this.getNumberOfDaysInMonth();
    for (var i = 1; i <= nods; ++i) {
      this.daysInMonth.push(i);
    }
  }

  private getNumberOfDaysInMonth(): number {
    return new Date(this.year, this.month, 0).getDate();
  }
}
