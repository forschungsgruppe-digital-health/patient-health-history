import { Component, Input, OnInit } from '@angular/core';
import { Entries, IGroup, IRow, RowOrGroup } from '../models';

@Component({
  selector: 'lib-calendar-lib-grid-row-or-group',
  templateUrl: './calendar-lib-grid-row-or-group.component.html',
  styleUrls: ['./calendar-lib-grid-row-or-group.component.scss']
})
export class CalendarLibGridRowOrGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _input: RowOrGroup | null = null;


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
  public columnWidth: number = 0;

  @Input()
  public rowHeaderColumnWidth: number = 0;

  @Input()
  public entries: Entries = {};

  @Input()
  public indentationLevel: number = 0;

  @Input()
  public set input(value: RowOrGroup | null) {
    this._input = value;
    this.group = (value as IGroup).subs ? value as IGroup : null;
    this.row = this.group ? null : value as IRow;
  }
  public get input() {
    return this._input;
  }

  public row: IRow | null = null;
  public group: IGroup | null = null;

  public numberOfDaysInMonth: number = 31;

  private monthChanged() {
    this.numberOfDaysInMonth = this.getNumberOfDaysInMonth();
  }

  private getNumberOfDaysInMonth(): number {
    return new Date(this.year, this.month, 0).getDate();
  }
}
