import { Component, Input } from '@angular/core';
import { GridSimpleRowComponent } from '../grid-simple-row/grid-simple-row.component';

@Component({
  template: "",
})
export class GridEntriesRowComponent<TEntry> extends GridSimpleRowComponent {

  private _entries: TEntry[] = [];

  @Input()
  get entries(): TEntry[] {
    return this._entries;
  }
  set entries(value: TEntry[]) {
    this._entries = value;
    this.entriesChanged();
  }

  protected entriesChanged() { }
}
