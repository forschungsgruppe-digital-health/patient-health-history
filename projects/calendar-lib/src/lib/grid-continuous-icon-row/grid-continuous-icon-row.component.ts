import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GridEntriesRowComponent } from '../grid-entries-row/grid-entries-row.component';
import { IcontinuousIconEntry } from '../models';

@Component({
  selector: 'lib-grid-continuous-icon-row',
  templateUrl: './grid-continuous-icon-row.component.html',
  styleUrls: ['./grid-continuous-icon-row.component.scss']
})
export class GridcontinuousIconRowComponent extends GridEntriesRowComponent<IcontinuousIconEntry> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  public readonly rowHeight: number = 100;

  cellSizeChanged() {
    super.cellSizeChanged();
    this.iconSize = Math.min(this.columnWidth, this.rowHeight);
  }

  public iconSize: number = 100;

  private _minValue: number = 0;
  private _maxValue: number = 3;

  public connectingLines: { x1: number, x2: number, y1: number, y2: number }[] = [];

  @Input()
  public get minValue(): number {
    return this._minValue;
  }
  public set minValue(value: number) {
    if (this._minValue != value) {
      this._minValue = value;
      this.updateConnectingLines();
    }
  }
  @Input()
  public get maxValue(): number {
    return this._maxValue;
  }
  public set maxValue(value: number) {
    if (this._maxValue != value) {
      this._maxValue = value;
      this.updateConnectingLines();
    }
  }

  protected entriesChanged() {
    this.updateConnectingLines();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: any) {
    setTimeout(() => this.updateConnectingLines());
  }
  
  private updateConnectingLines(): void {
    let sorted = this.entries.sort((a, b) => a.day - b.day);
    if (sorted.length <= 1) {
      this.connectingLines = [];
      return;
    }

    let l: { x1: number, x2: number, y1: number, y2: number }[] = [];
    for (let i = 1; i < sorted.length; ++i) {
      l.push({
        x1: (sorted[i - 1].day - 0.5) * this.columnWidth,
        x2: (sorted[i].day - 0.5) * this.columnWidth,
        y1: (this.rowHeight - this.iconSize) / (this.maxValue - this.minValue) * (sorted[i - 1].value - this.minValue) + this.iconSize / 2,
        y2: (this.rowHeight - this.iconSize) / (this.maxValue - this.minValue) * (sorted[i].value - this.minValue) + this.iconSize / 2
      })
    }
    this.connectingLines = l;
  }
}
