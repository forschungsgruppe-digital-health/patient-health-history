import { Component, ElementRef, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { Entries, Groups, IRowData } from '../models';

@Component({
  selector: 'calendar-lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private static readonly compactLayoutMaxWidth: number = 720;
  private static readonly minRowHeaderWidth: number = 250;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.monthChanged();
  }

  ngAfterContentChecked(): void {
    this.updateLayout();
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
  public useCompactLayout: boolean = false;
  public useLinearLayout: boolean = false;

  public get firstLineInCompactLayoutOffset() {
    return new Date(this.year, this.month - 1, 1, 12, 0, 0, 0).getDay() - 1;
  }

  public numberOfDaysInMonth: number = 31;

  private monthChanged() {
    this.numberOfDaysInMonth = this.getNumberOfDaysInMonth();
  }

  private getNumberOfDaysInMonth(): number {
    return new Date(this.year, this.month, 0).getDate();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any) {
    this.updateLayout();
  }

  private updateLayout() {
    let width = this.elementRef.nativeElement.offsetWidth;
    if (width > GridComponent.compactLayoutMaxWidth) {
      this.columnWidth = Math.floor((width - GridComponent.minRowHeaderWidth) / this.numberOfDaysInMonth);
      this.rowHeaderColumnWidth = width - this.columnWidth * this.numberOfDaysInMonth - 1;
      this.useLinearLayout = false;
    }
    else {
      this.rowHeaderColumnWidth = width;
      this.columnWidth = width / this.numberOfDaysInMonth;
      this.useLinearLayout = true;
    }

    this.useCompactLayout = this.columnWidth < 25;
  }
}
