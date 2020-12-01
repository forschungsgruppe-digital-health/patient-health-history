import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-grid-simple-row',
  templateUrl: './grid-simple-row.component.html',
})
export class GridSimpleRowComponent {

  private _columnWidth: number = 0;
  private _rowHeight: number = 40;
  private _numberOfDays: number = 40;
  private _useCompactLayout: boolean = true;

  @Input()
  get columnWidth(): number {
    return this._columnWidth;
  }
  set columnWidth(value: number) {
    if (this._columnWidth != value) {
      this._columnWidth = value;
      this.cellSizeChanged();
    }
  }

  @Input()
  get rowHeight(): number {
    return this._rowHeight;
  }
  set rowHeight(value: number) {
    if (this._rowHeight != value) {
      this._rowHeight = value;
      this.cellSizeChanged();
    }
  }

  @Input()
  get numberOfDays(): number {
    return this._numberOfDays;
  }
  set numberOfDays(value: number) {
    if (this._numberOfDays != value) {
      this._numberOfDays = value;
      this.numberOfDaysChanged();
    }
  }

  @Input()
  get useCompactLayout(): boolean {
    return this._useCompactLayout;
  }
  set useCompactLayout(value: boolean) {
    if (this._useCompactLayout != value) {
      this._useCompactLayout = value;
      this.useCompactLayoutChanged();
    }
  }

  protected cellSizeChanged() { }

  protected numberOfDaysChanged() { }

  protected useCompactLayoutChanged() { }
}
