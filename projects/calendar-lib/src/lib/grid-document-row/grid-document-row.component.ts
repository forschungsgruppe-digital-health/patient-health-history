import { Component, Input, OnInit } from '@angular/core';
import { GridEntriesRowComponent } from '../grid-entries-row/grid-entries-row.component';
import { IDocumentEntry } from '../models';

@Component({
  selector: 'lib-grid-document-row',
  templateUrl: './grid-document-row.component.html',
  styleUrls: ['./grid-document-row.component.scss']
})
export class GridDocumentRowComponent extends GridEntriesRowComponent<IDocumentEntry> implements OnInit {

  ngOnInit(): void {
  }

  protected cellSizeChanged() {
    super.cellSizeChanged();
    this.iconSize = Math.min(this.columnWidth, this.rowHeight);//3px padding on each side
  }

  protected numberOfDaysChanged() {
    super.numberOfDaysChanged();
    this.updateLines();
  }

  protected entriesChanged() {
    this.updateLines();
  }

  private updateLines() {
    let days = this.entries.map(entry => entry.day);
    console.log(days);
    this.lines = Array(this.numberOfDays + 1)
      .fill(1)
      .map((x, i) => i)
      .filter(x => days.indexOf(x) == -1);
  }

  onEntryClick(entry: IDocumentEntry) {
    window.open(entry.link, "_blank");
  }

  iconSize: number = 1;

  lines: number[] = [];
}
