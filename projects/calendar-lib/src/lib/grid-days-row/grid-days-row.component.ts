import { Component, OnInit } from '@angular/core';
import { GridSimpleRowComponent } from '../grid-simple-row/grid-simple-row.component';

@Component({
  selector: 'lib-grid-days-row',
  templateUrl: './grid-days-row.component.html',
  styleUrls: ['./grid-days-row.component.scss']
})
export class GridDaysRowComponent extends GridSimpleRowComponent implements OnInit {

  ngOnInit(): void {
  }

  public daysToRender: number[] = [];

  protected numberOfDaysChanged() {
    this.updateLayout();
  }

  protected useCompactLayoutChanged() {
    this.updateLayout();
  }

  private updateLayout() {
    let allDays = Array(this.numberOfDays + 1)
      .fill(1)
      .map((x, i) => i);

    if (this.useCompactLayout) {
      this.daysToRender = allDays.filter(x => x % 5 == 0 || x == 1);
    }
    else {
      this.daysToRender = allDays;
    }
  }
}
