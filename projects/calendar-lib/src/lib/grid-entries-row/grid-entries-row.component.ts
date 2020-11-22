import { Component, Input } from '@angular/core';
import { GridSimpleRowComponent } from '../grid-simple-row/grid-simple-row.component';

@Component({
  template: "",
})
export class GridEntriesRowComponent<TEntry> extends GridSimpleRowComponent {

  @Input()
  entries: TEntry[] = [];
}
