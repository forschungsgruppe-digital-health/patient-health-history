import { Component, Input, OnInit } from '@angular/core';
import { GridEntriesRowComponent } from '../grid-entries-row/grid-entries-row.component';
import { IIconEntry } from '../models';

@Component({
  selector: 'lib-grid-icon-row',
  templateUrl: './grid-icon-row.component.html',
  styleUrls: ['./grid-icon-row.component.scss']
})
export class GridIconRowComponent extends GridEntriesRowComponent<IIconEntry> implements OnInit {

  ngOnInit(): void {
  }

  cellSizeChanged() {
    super.cellSizeChanged();
    this.iconSize = Math.min(this.columnWidth, this.rowHeight);//3px padding on each side
  }

  iconSize: number = 1;

  tooltip: string | null = null;
  tooltipX: number = 0;
  tooltipHeight: number = 40;
  tooltipPath: string = "";

  onMouseOver(entry: IIconEntry) {
    this.tooltip = entry.tooltip;
    this.tooltipX = this.columnWidth * (entry.day - 1);

    // ToDo: measure tooltip-size and change path
    const width = 200;
    const height = this.tooltipHeight;
    const rxy = 5;
    let path = `M${this.columnWidth / 2 + this.tooltipX} 0 ` // Start at nose tip
      + `l${rxy} ${rxy} ` // line from nose tip to right side of upper line
      + `l${width - rxy - this.columnWidth / 2 - rxy} 0 ` // upper line on right side of nose
      + `a${rxy} ${rxy} 0 0 1 ${rxy} ${rxy}` // top right arc
      + `l0 ${height - 3 * rxy} ` // right line
      + `a${rxy} ${rxy} 0 0 1 ${-rxy} ${rxy}`//bottom right arc
      + `l${-width + 2 * rxy} 0 ` // bottom line
      + `a${rxy} ${rxy} 0 0 1 ${-rxy} ${-rxy}`//bottom left arc
      + `l0 ${-height + 3 * rxy} `//left line
      + `a${rxy} ${rxy} 0 0 1 ${rxy} ${-rxy}`//top left arc
      + `l${this.columnWidth / 2 - 2 * rxy} 0 `//upper line from top left arc to left side of nose
      + `l${rxy} ${-rxy}`;//from upper line to nose tip

    this.tooltipPath = path;
  }

  onMouseLeave() {
    this.tooltip = null;
  }
}
