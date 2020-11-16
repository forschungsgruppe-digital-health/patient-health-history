import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalendarLibModule } from 'calendar-lib'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
