import { Component, OnInit } from '@angular/core';
import { GridEntriesRowComponent } from '../grid-entries-row/grid-entries-row.component';
import { IDocumentEntry } from '../models';
import { TextService } from '../text.service';

@Component({
  selector: 'lib-grid-document-row',
  templateUrl: './grid-document-row.component.html',
  styleUrls: ['./grid-document-row.component.scss']
})
export class GridDocumentRowComponent extends GridEntriesRowComponent<IDocumentEntry> implements OnInit {

  public constructor(
    private _textService: TextService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  public entryRenderData: { entry: IDocumentEntry, nameWidth: number }[] = [];

  protected entriesChanged() {
    this.entryRenderData = this.entries.map(x => {
      return {
        entry: x,
        nameWidth: this._textService.getTextWidth(x.name, "14px Segoe UI") || 100
      };
    }).sort((a, b) => a.entry.day - b.entry.day);
  }

  protected cellSizeChanged() {
    super.cellSizeChanged();
    this.iconSize = Math.min(Math.max(this.columnWidth, this.rowHeight - 10), this.rowHeight);
  }

  protected getLinesToRender() {
    let superLines = super.getLinesToRender();
    let days = this.entries.map(entry => entry.day);
    return superLines.filter(x => days.indexOf(x - 1) == -1);
  }

  onEntryClick(entry: IDocumentEntry) {
    window.open(entry.link, "_blank");
  }

  iconSize: number = 1;
}
