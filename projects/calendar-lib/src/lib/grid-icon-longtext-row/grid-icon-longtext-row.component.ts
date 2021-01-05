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

  cellSizeChanged() {
    super.cellSizeChanged();
    this.iconSize = Math.min(this.columnWidth, this.rowHeight);
  }

  iconSize: number = 1;

  public entryRenderData: { entry: IIconLongTextEntry, textWidth: number }[] = [];

  protected entriesChanged() {
    this.entryRenderData = this.entries.map(x => {
      return {
        entry: x,
        textWidth: this._textService.getTextWidth(x.text, "16px Segoe UI") || 100
      };
    }).sort((a, b) => a.entry.day - b.entry.day);
  }

}