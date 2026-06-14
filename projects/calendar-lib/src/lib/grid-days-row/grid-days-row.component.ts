import { Component, OnInit } from '@angular/core';
import { GridSimpleRowComponent } from '../grid-simple-row/grid-simple-row.component';

@Component({
  standalone: false,
  selector: 'lib-grid-days-row',
  templateUrl: './grid-days-row.component.html',
  styleUrls: ['./grid-days-row.component.scss']
})
export class GridDaysRowComponent extends GridSimpleRowComponent implements OnInit {
  ngOnInit(): void {
  }
}
