import { Component, OnInit } from '@angular/core';
import { Entries, IGroup, IRow } from 'calendar-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentMonthData: any[] = [];
  public month = 8;
  public year = 220;
  public groups: (IGroup | IRow)[] = [
    { name: "Erstdiagnose", key: "Erstdiagnose" },
    { name: "Verknüpfte Dokumente", key: "Verknüpfte Dokumente" },
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
      name: "weitere Medikation", isCollapsed: true, key: "weitere Medikation", subs: [
        { name: "Loratadin", key: "Loratadin" }
      ]
    },
    { name: "Subjektives Wohlbefinden", key: "Subjektives Wohlbefinden" },
  ];
  public entries: Entries = {
    "Verknüpfte Dokumente": {
      type: "document",
      entries: [
        {
          day: 29,
          link: "https://google.de",
          name: "Google"
        },
        {
          day: 5,
          link: "https://bing.de",
          name: "Bing"
        },
        {
          day: 21,
          link: "https://yahoo.de",
          name: "Yahoo"
        }
      ]
    },
    "Cladribin": {
      type: "icon",
      entries: [
        {
          day: 1,
          tooltip: "Tooltip 1",
          icon: "/assets/svg/icon_alles_genommen.svg"
        },
        {
          day: 2,
          tooltip: "Tooltip 2",
          icon: "/assets/svg/icon_alles_genommen.svg"
        },
        {
          day: 3,
          tooltip: "Tooltip 3",
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        },
        {
          day: 5,
          tooltip: "Tooltip 5",
          icon: "/assets/svg/icon_alles_genommen.svg"
        },
        {
          day: 6,
          tooltip: "Tooltip 6",
          icon: "/assets/svg/icon_nichts_genommen.svg"
        },
        {
          day: 7,
          tooltip: "Tooltip 7",
          icon: "/assets/svg/icon_alles_genommen.svg"
        },
        {
          day: 16,
          tooltip: "Tooltip 16",
          icon: "/assets/svg/icon_alles_genommen.svg"
        },
        {
          day: 17,
          tooltip: "Tooltip 17",
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        }
      ]
    }
  }

  public ngOnInit() {
    this.loadSampleData(220, 8);
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
