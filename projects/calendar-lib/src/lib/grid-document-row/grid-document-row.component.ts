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
}
