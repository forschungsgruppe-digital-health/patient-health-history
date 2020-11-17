import { Component, OnInit } from '@angular/core';
import { IGroup, IRow } from 'calendar-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentMonthData: any[] = [];
  public month = 8;
  public year = 2020;
  public groups: (IGroup | IRow)[] = [
    { name: "Erstdiagnose", key: "Erstdiagnose" },
    { name: "Weitere Diagnosen", key: "Weitere Diagnosen" },
    { name: "Schübe", key: "Schübe" },
    { name: "Schubbehandlung", key: "Schubbehandlung" },
    {
      name: "Medikation", isCollapsed: false, subs: [
        { name: "Cladribin", key: "Cladribin" },
        { name: "Gilenya", key: "Gilenya" }
      ]
    },
    {
      name: "weitere Medikation", key: "weitere Medikation", subs: [
        { name: "Loratadin", key: "Loratadin" }
      ]
    },
    { name: "Subjektives Wohlbefinden", key: "Subjektives Wohlbefinden" },
    { name: "Verknüpfte Dokumente", key: "Verknüpfte Dokumente" },
  ];

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
  }
}
