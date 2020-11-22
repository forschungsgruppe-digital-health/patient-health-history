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
}
