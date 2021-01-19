import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IRowData, KnownEntries } from '../models';

@Component({
  selector: 'lib-grid-templated-row',
  templateUrl: './grid-templated-row.component.html',
  styleUrls: ['./grid-templated-row.component.scss']
})
export class GridTemplatedRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  public entries: KnownEntries | null = null;

  @Input()
  public columnWidth: number = 0;
  
  @Input()
  public useCompactLayout: boolean = true;

  @Input()
  public numberOfDaysInMonth: number = 0;

  @Input()
  public year: number = 0;

  @Input()
  public month: number = 0;

  @Input()
  public rowTemplate: TemplateRef<IRowData> | null = null;

  @Input()
  public drawLineInCompactLayout: (day: number) => boolean = (x) => true;

  public get rowData(): IRowData | null {
    return {
      entries: this.entries ? <any[]>this.entries.entries : [],
      type: this.entries ? this.entries.type : "",
      columnWidth: this.columnWidth,
      numberOfDays: this.numberOfDaysInMonth,
      useCompactLayout: this.useCompactLayout,
      drawLineInCompactLayout: this.drawLineInCompactLayout,
    }
  }
}
