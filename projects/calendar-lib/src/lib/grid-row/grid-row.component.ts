import { Component, Input, OnInit } from '@angular/core';
import { IRow, KnownEntries } from '../models';

@Component({
  selector: 'lib-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent implements OnInit {

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

  @Input()
  public entries: KnownEntries | null= null;

  @Input()
  public indentationLevel : number = 0;

  public numberOfDaysInMonth: number = 31;

  private monthChanged() {
    this.numberOfDaysInMonth = this.getNumberOfDaysInMonth();
  }

  private getNumberOfDaysInMonth(): number {
    return new Date(this.year, this.month, 0).getDate();
  }
}
