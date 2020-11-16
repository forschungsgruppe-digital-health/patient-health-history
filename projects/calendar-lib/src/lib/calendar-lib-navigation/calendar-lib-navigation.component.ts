import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calendar-lib-navigation',
  templateUrl: './calendar-lib-navigation.component.html',
  styleUrls: ['./calendar-lib-navigation.component.scss']
})
export class CalendarLibNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public requestPrevious = new EventEmitter<null>();

  @Output()
  public requestNext = new EventEmitter<null>();

  @Input()
  public yearMonthString: string = "";

  public requestPreviousClick() {
    this.requestPrevious.emit();
  }

  public requestNextClick() {
    this.requestNext.emit();
  }
}
