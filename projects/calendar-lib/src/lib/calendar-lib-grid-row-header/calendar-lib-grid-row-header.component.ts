import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-calendar-lib-grid-row-header',
  templateUrl: './calendar-lib-grid-row-header.component.html',
  styleUrls: ['./calendar-lib-grid-row-header.component.scss']
})
export class CalendarLibGridRowHeaderComponent implements OnInit {

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
