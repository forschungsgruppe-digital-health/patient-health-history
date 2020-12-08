import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserModule } from '@angular/platform-browser';
import { GridRowHeaderComponent } from './grid-row-header/grid-row-header.component';
import { GridIconRowComponent } from './grid-icon-row/grid-icon-row.component';
import { GridDocumentRowComponent } from './grid-document-row/grid-document-row.component';
import { GridSimpleRowComponent } from './grid-simple-row/grid-simple-row.component';
import { GridEntriesRowComponent } from './grid-entries-row/grid-entries-row.component';
import { GridRowOrGroupComponent } from './grid-row-or-group/grid-row-or-group.component';
import { GridRowComponent } from './grid-row/grid-row.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GridComponent } from './grid/grid.component';
import { GridDaysRowComponent } from './grid-days-row/grid-days-row.component';
import { GridRowLineComponent } from './grid-row-line/grid-row-line.component';
import { GridTemplatedRowComponent } from './grid-templated-row/grid-templated-row.component';
import { GridcontinuousIconRowComponent } from './grid-continuous-icon-row/grid-continuous-icon-row.component';


@NgModule({
  declarations: [
    GridComponent,
    NavigationComponent,
    CalendarComponent,
    IconButtonComponent,
    GridRowComponent,
    GridRowOrGroupComponent,
    GridRowHeaderComponent,
    GridSimpleRowComponent,
    GridEntriesRowComponent,
    GridIconRowComponent,
    GridDocumentRowComponent,
    GridDaysRowComponent,
    GridRowLineComponent,
    GridTemplatedRowComponent,
    GridcontinuousIconRowComponent
  ],
  imports: [
    BrowserModule,
    InlineSVGModule.forRoot()
  ],
  exports: [
    CalendarComponent,
    GridIconRowComponent,
    GridDocumentRowComponent,
    GridSimpleRowComponent,
    GridEntriesRowComponent,
    GridcontinuousIconRowComponent    
  ]
})
export class CalendarLibModule { }
