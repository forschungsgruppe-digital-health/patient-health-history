import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Groups } from '../models';

@Component({
  selector: 'calendar-lib-container',
  templateUrl: './calendar-lib-container.component.html',
  styleUrls: ['./calendar-lib-container.component.css']
})
export class CalendarLibContainerComponent implements OnInit {

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
