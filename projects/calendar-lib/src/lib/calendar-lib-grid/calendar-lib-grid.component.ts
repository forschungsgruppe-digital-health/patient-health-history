import { Component, Input, OnInit } from '@angular/core';
import { Entries, Groups } from '../models';

@Component({
  selector: 'calendar-lib-grid',
  templateUrl: './calendar-lib-grid.component.html',
  styleUrls: ['./calendar-lib-grid.component.scss']
})
export class CalendarLibGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.monthChanged();
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
  public groups: Groups = [];

  @Input()
  public entries: Entries = {};

  public columnWidth: number = 30;
  public rowHeaderColumnWidth: number = 300;

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
