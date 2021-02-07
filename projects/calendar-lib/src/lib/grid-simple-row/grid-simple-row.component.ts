import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-grid-simple-row',
  templateUrl: './grid-simple-row.component.html',
  styleUrls: ['./grid-simple-row.component.scss']
})
export class GridSimpleRowComponent {

  private _columnWidth: number = 0;
  private _numberOfDays: number = 40;
  private _useCompactLayout: boolean = true;
  private _drawLineInCompactLayout: (day: number) => boolean = (x) => false;

  public readonly rowHeight: number = 40;

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

  @Input()
  public get drawLineInCompactLayout() {
    return this._drawLineInCompactLayout;
  }
  public set drawLineInCompactLayout(value: (day: number) => boolean) {
    if (this._drawLineInCompactLayout != value) {
      this._drawLineInCompactLayout = value;
      this.drawLineInCompactLayoutChanged();
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

  protected drawLineInCompactLayoutChanged() {
    this.linesToRender = this.getLinesToRender();
  }

  protected getLinesToRender(): number[] {
    let allDays = Array(this.numberOfDays + 1)
      .fill(1)
      .map((_, i) => i);

    if (this.useCompactLayout) {
      return allDays.filter(x => x == 1 || this.drawLineInCompactLayout(x));
    }
    else {
      return allDays;
    }
  }
}
