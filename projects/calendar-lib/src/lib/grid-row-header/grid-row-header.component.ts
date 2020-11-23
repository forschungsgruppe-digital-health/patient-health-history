import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-grid-row-header',
  templateUrl: './grid-row-header.component.html',
  styleUrls: ['./grid-row-header.component.scss']
})
export class GridRowHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  rowHeaderColumnWidth: number = 300;

  @Input()
  rowHeight: number = 300;

  @Input()
  indentationLevel: number = 0;

  @Input()
  text: string = "";
}
