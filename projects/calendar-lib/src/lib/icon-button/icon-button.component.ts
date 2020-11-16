import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public asset: string="";

  @Input()
  public alt: string="";

  @Input()
  public size: number=24;
}
