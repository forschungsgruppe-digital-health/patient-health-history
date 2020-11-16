import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calendar-lib-container',
  templateUrl: './calendar-lib-container.component.html',
  styleUrls: ['./calendar-lib-container.component.css']
})
export class CalendarLibContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public requestPreviousMonth = new EventEmitter<null>();

  @Output()
  public requestNextMonth = new EventEmitter<null>();

  @Input()
  public yearMonthString: string = "";

  public requestPreviousMonthClick() {
    this.requestPreviousMonth.emit();
  }

  public requestNextMonthClick() {
    this.requestNextMonth.emit();
  }
}
