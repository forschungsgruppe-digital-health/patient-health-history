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
    this.iconSize = Math.min(Math.max(this.columnWidth, this.rowHeight - 10), this.rowHeight);
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
    this.lines = this.linesToRender.filter(x => days.indexOf(x-1) == -1);
  }

  onEntryClick(entry: IDocumentEntry) {
    window.open(entry.link, "_blank");
  }

  iconSize: number = 1;

  lines: number[] = [];
}
