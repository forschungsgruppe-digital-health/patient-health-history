import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentMonthData: any[] = [];
  public yearMonthString: string = "";

  private month = 8;
  private year = 2020;

  public ngOnInit() {
    this.loadSampleData(2020, 8);
  }

  public requestNextMonth() {
    this.loadSampleData(this.month == 12 ? this.year + 1 : this.year, this.month == 12 ? 1 : this.month + 1);
  }

  public requestPreviousMonth() {
    this.loadSampleData(this.month == 1 ? this.year - 1 : this.year, this.month == 1 ? 12 : this.month - 1);
  }

  private loadSampleData(year: number, month: number) {
    this.month = month;
    this.year = year;

    this.currentMonthData = [];
    this.yearMonthString = `${this.month} / ${this.year}`
  }
}
