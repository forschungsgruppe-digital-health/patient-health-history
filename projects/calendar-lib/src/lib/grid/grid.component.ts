import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Entries, Groups, IRowData } from '../models';

@Component({
  selector: 'calendar-lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

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
  
  @Input()
  public rowTemplate: TemplateRef<IRowData> | null = null;

  public columnWidth: number = 30;
  public rowHeaderColumnWidth: number = 300;

  public numberOfDaysInMonth: number = 31;

  private monthChanged() {
    this.numberOfDaysInMonth = this.getNumberOfDaysInMonth();
  }

  private getNumberOfDaysInMonth(): number {
    return new Date(this.year, this.month, 0).getDate();
  }
}
