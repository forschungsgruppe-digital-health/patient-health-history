import { Component, OnInit } from '@angular/core';
import { GridEntriesRowComponent } from '../grid-entries-row/grid-entries-row.component';
import { IIconLongTextEntry } from '../models';
import { TextService } from '../text.service';

@Component({
  selector: 'lib-grid-icon-longtext-row',
  templateUrl: './grid-icon-longtext-row.component.html',
  styleUrls: ['./grid-icon-longtext-row.component.scss']
})
export class GridIconLongtextRowComponent extends GridEntriesRowComponent<IIconLongTextEntry> implements OnInit {

  public constructor(
    private _textService: TextService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  public entryRenderData: { entry: IIconLongTextEntry, textWidth: number, rowIndex: number }[] = [];
  public rowCount: number = 0;

  cellSizeChanged() {
    super.cellSizeChanged();
    this.iconSize = Math.min(Math.max(this.columnWidth, this.rowHeight - 10), this.rowHeight);
    this.sortEntriesIntoRows();
  }

  private sortEntriesIntoRows() {
    let lastEntryForEachRow: { [key: number]: { entry: IIconLongTextEntry, textWidth: number, rowIndex: number } } = {};
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
          if ((previous.entry.day - 1) * this.columnWidth + previous.textWidth + this.iconSize + this.rowHeight / 2 + 3
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

  iconSize: number = 1;

  protected entriesChanged() {
    var data = this.entryRenderData = this.entries.map(x => {
      return {
        entry: x,
        textWidth: this._textService.getTextWidth(x.text, "16px  Arial, sans-serif") || 100,
        rowIndex: 0
      };
    }).sort((a, b) => a.entry.day - b.entry.day);
    this.iconSize = Math.min(this.columnWidth, this.rowHeight);

    this.entryRenderData = data;
    this.sortEntriesIntoRows();
  }

}
