import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Entries, Groups, IRowData } from '../models';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _month: number = 1;
  private _year: number = 1;

  @Output()
  public requestPreviousMonth = new EventEmitter<null>();

  @Output()
  public requestNextMonth = new EventEmitter<null>();

  @Input()
  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    this._month = value;
    this.updateYearMonthString();
  }

  @Input()
  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
    this.updateYearMonthString();
  }

  @Input()
  public groups: Groups = [];

  @Input()
  public entries: Entries = {};

  @Input()
  public rowTemplate: TemplateRef<IRowData> | null = null;

  @Input()
  public drawLineInCompactLayout: (day: number) => boolean =
    (x) => {
      let firstMonday = new Date(this.year, this.month - 1, 1, 12, 0, 0, 0).getDay();
      return (firstMonday - 1 + x) % 7 == 0;
    };

  @Input()
  public rowHeaderCollapseButtonTemplate: TemplateRef<{ isCollapsed: boolean, rowHeight: boolean }> | null = null;

  @Input()
  public navigationPreviousButtonTemplate: TemplateRef<{}> | null = null;

  @Input()
  public navigationMonthTemplate: TemplateRef<{}> | null = null;

  @Input()
  public navigationNextButtonTemplate: TemplateRef<{}> | null = null;

  public yearMonthString: string = "";

  public requestPreviousMonthClick() {
    this.requestPreviousMonth.emit();
  }

  public requestNextMonthClick() {
    this.requestNextMonth.emit();
  }

  private updateYearMonthString() {
    this.yearMonthString = `${this.month} / ${this.year}`
  }
}
