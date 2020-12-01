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

  public linesToRender: number[] = [];

  protected cellSizeChanged() { }

  protected numberOfDaysChanged() {
    this.linesToRender = this.getLinesToRender();
  }

  protected useCompactLayoutChanged() {
    this.linesToRender = this.getLinesToRender();
  }

  protected getLinesToRender(): number[] {
    let allDays = Array(this.numberOfDays + 1)
      .fill(1)
      .map((_, i) => i);

    if (this.useCompactLayout) {
      return allDays.filter(x => (x - 1) % 5 == 0 && x != 31);
    }
    else {
      return allDays;
    }
  }
}
