import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-grid-simple-row',
  templateUrl: './grid-simple-row.component.html',
})
export class GridSimpleRowComponent {

  @Input()
  columnWidth: number = 0;

  @Input()
  numberOfDays: number = 31;

  @Input()
  rowHeight: number = 40;
}
