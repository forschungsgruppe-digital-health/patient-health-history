import { NgModule } from '@angular/core';
import { CalendarLibGridComponent } from './calendar-lib-grid/calendar-lib-grid.component';
import { CalendarLibNavigationComponent } from './calendar-lib-navigation/calendar-lib-navigation.component';
import { CalendarLibContainerComponent } from './calendar-lib-container/calendar-lib-container.component';



@NgModule({
  declarations: [
    CalendarLibGridComponent,
    CalendarLibNavigationComponent, 
    CalendarLibContainerComponent
  ],
  imports: [
  ],
  exports: [CalendarLibContainerComponent]
})
export class CalendarLibModule { }
