import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  public iconPath: string = "/assets/svg/icon_dokument.svg";

  public entryRenderData: { entry: IDocumentEntry, nameWidth: number, rowIndex: number }[] = [];
  public rowCount: number = 0;

  protected entriesChanged() {
    var data = this.entries.map(x => {
      return {
        entry: x,
        nameWidth: this._textService.getTextWidth(x.name, "14px Segoe UI") || 100,
        rowIndex: 0
      };
    }).sort((a, b) => a.entry.day - b.entry.day);

    this.entryRenderData = data;
    this.sortEntriesIntoRows();
  }

  private sortEntriesIntoRows() {
    let lastEntryForEachRow: { [key: number]: { entry: IDocumentEntry, nameWidth: number, rowIndex: number } } = {};
    this.rowCount = 1;
    for (let entryIndex = 0; entryIndex < this.entryRenderData.length; ++entryIndex) {
      for (let rowIndex = 0; rowIndex < this.rowCount + 1; ++rowIndex) {
        let previous = lastEntryForEachRow[rowIndex];
        if (!previous) {
          lastEntryForEachRow[rowIndex] = this.entryRenderData[entryIndex];
          this.entryRenderData[entryIndex].rowIndex = rowIndex;
          break;
        }
        else {
          if ((previous.entry.day - 1) * this.columnWidth + previous.nameWidth + this.iconSize + this.rowHeight / 2 + 3
            <= (this.entryRenderData[entryIndex].entry.day - 1) * this.columnWidth) {
            lastEntryForEachRow[rowIndex] = this.entryRenderData[entryIndex];
            this.entryRenderData[entryIndex].rowIndex = rowIndex;
            break;
          }
          else {

          }
        }
      }
      this.rowCount = Math.max(this.entryRenderData[entryIndex].rowIndex + 1, this.rowCount);
    }
  }

  protected cellSizeChanged() {
    super.cellSizeChanged();
    this.iconSize = Math.min(Math.max(this.columnWidth, this.rowHeight - 10), this.rowHeight);
    this.sortEntriesIntoRows();
  }

  protected getLinesToRender() {
    let superLines = super.getLinesToRender();
    let days = this.entries.map(entry => entry.day);
    return superLines;//.filter(x => days.indexOf(x - 1) == -1);
  }

  onEntryClick(entry: IDocumentEntry) {
    window.open(entry.link, "_blank");
  }

  iconSize: number = 1;
}
