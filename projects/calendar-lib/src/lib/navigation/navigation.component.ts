import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'lib-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public requestPrevious = new EventEmitter<null>();

  @Output()
  public requestNext = new EventEmitter<null>();

  @Input()
  public previousButtonTemplate: TemplateRef<{}> | null = null;

  @Input()
  public nextButtonTemplate: TemplateRef<{}> | null = null;

  @Input()
  public yearMonthString: string = "";

  public requestPreviousClick() {
    this.requestPrevious.emit();
  }

  public requestNextClick() {
    this.requestNext.emit();
  }
}
