import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-grid-simple-row',
  templateUrl: './grid-simple-row.component.html',
})
export class GridSimpleRowComponent {

  private _columnWidth: number = 0;
  private _rowHeight: number = 40;
  private _numberOfDays: number = 40;

  @Input()
  get columnWidth(): number {
    return this._columnWidth;
  }
  set columnWidth(value: number) {
    this._columnWidth = value;
    this.cellSizeChanged();
  }

  @Input()
  get rowHeight(): number {
    return this._rowHeight;
  }
  set rowHeight(value: number) {
    this._rowHeight = value;
    this.cellSizeChanged();
  }

  @Input()
  get numberOfDays(): number {
    return this._numberOfDays;
  }
  set numberOfDays(value: number) {
    this._numberOfDays = value;
    this.numberOfDaysChanged();
  }

  protected cellSizeChanged() { }

  protected numberOfDaysChanged() { }
}
