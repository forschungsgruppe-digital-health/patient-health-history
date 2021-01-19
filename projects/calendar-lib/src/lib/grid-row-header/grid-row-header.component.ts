import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-grid-row-header',
  templateUrl: './grid-row-header.component.html',
  styleUrls: ['./grid-row-header.component.scss']
})
export class GridRowHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public isCollapsedChange = new EventEmitter<boolean>();

  @Input()
  isCollapsed: boolean = true;

  @Input()
  rowHeaderColumnWidth: number = 300;

  @Input()
  indentationLevel: number = 0;

  @Input()
  text: string = "";

  @Input()
  showCollapseButton: boolean = false;

  @Input()
  showTopBorder: boolean = false;

  @Input()
  showBottomBorder: boolean = false;

  @Input()
  isBold: boolean = false;

  @Input()
  isItalic: boolean = false;

  @Input()
  rowHeight: number = 40;

  @Input()
  public rowHeaderCollapseButtonTemplate: TemplateRef<{ isCollapsed: boolean, rowHeight: boolean }> | null = null;

  onToggle() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }
}
