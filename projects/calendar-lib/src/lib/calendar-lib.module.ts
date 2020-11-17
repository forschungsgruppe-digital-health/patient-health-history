import { NgModule } from '@angular/core';
import { CalendarLibGridComponent } from './calendar-lib-grid/calendar-lib-grid.component';
import { CalendarLibNavigationComponent } from './calendar-lib-navigation/calendar-lib-navigation.component';
import { CalendarLibContainerComponent } from './calendar-lib-container/calendar-lib-container.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarLibGridRowComponent } from './calendar-lib-grid-row/calendar-lib-grid-row.component';
import { CalendarLibGridRowOrGroupComponent } from './calendar-lib-grid-row-or-group/calendar-lib-grid-row-or-group.component';


@NgModule({
  declarations: [
    CalendarLibGridComponent,
    CalendarLibNavigationComponent, 
    CalendarLibContainerComponent, 
    IconButtonComponent, CalendarLibGridRowComponent, CalendarLibGridRowOrGroupComponent
  ],
  imports: [
    BrowserModule,
    InlineSVGModule.forRoot()
  ],
  exports: [CalendarLibContainerComponent]
})
export class CalendarLibModule { }
