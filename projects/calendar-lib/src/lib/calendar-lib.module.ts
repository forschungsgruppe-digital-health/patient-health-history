import { NgModule } from '@angular/core';
import { CalendarLibGridComponent } from './calendar-lib-grid/calendar-lib-grid.component';
import { CalendarLibNavigationComponent } from './calendar-lib-navigation/calendar-lib-navigation.component';
import { CalendarLibContainerComponent } from './calendar-lib-container/calendar-lib-container.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CalendarLibGridComponent,
    CalendarLibNavigationComponent, 
    CalendarLibContainerComponent, 
    IconButtonComponent
  ],
  imports: [
    BrowserModule,
    InlineSVGModule.forRoot()
  ],
  exports: [CalendarLibContainerComponent]
})
export class CalendarLibModule { }
