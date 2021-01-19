import { Component, OnInit } from '@angular/core';
import { Entries, IGroup, IIconEntry, IRow } from 'calendar-lib';

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
    { name: "Verknüpfte Dokumente", key: "Verknüpfte Dokumente" },
    { name: "Schuebe", key: "Schuebe" },
    { name: "Weitere Diagnosen", key: "Weitere Diagnosen" },
    { name: "Schübe", key: "Schübe", fontStyle: { isBold: false, isItalic: false } },
    { name: "Schubbehandlung", key: "Schubbehandlung", fontStyle: { isBold: true, isItalic: true } },
    {
      name: "Medikation", key: "Medikation", isCollapsed: false, fontStyle: { isBold: true, isItalic: false }, subs: [
        { name: "Cladribin", key: "Cladribin", fontStyle: { isBold: false, isItalic: true } },
        { name: "Gilenya", key: "Gilenya", fontStyle: { isBold: false, isItalic: true } }
      ]
    },
    {
      name: "weitere Medikation", key: "Lib Unknown Test", isCollapsed: true, subs: [
        { name: "Loratadin", key: "Loratadin", fontStyle: { isBold: false, isItalic: true } }
      ]
    },
    { name: "Subjektives Wohlbefinden", key: "Subjektives Wohlbefinden", fontStyle: { isBold: true, isItalic: false } },
  ];
  public entries: Entries = {
    "Verknüpfte Dokumente": {
      type: "document",
      entries: [
        {
          day: 10,
          link: "https://google.de",
          name: "Google Homepage"
        },
        {
          day: 5,
          link: "https://bing.de",
          name: "Bing"
        },
        {
          day: 9,
          link: "https://yahoo.de",
          name: "Yahoo"
        }
      ]
    },
    "Erstdiagnose": {
      type: "longtextIcon",
      entries: [
        {
          day: 3,
          icon: "/assets/svg/icon_alles_genommen.svg",
          text: "Testeintrag",
          bgcolor: "#ffffff"
        },
        {
          day: 5,
          icon: "/assets/svg/icon_alles_genommen.svg",
          text: "Testeintrag 2",
          bgcolor: "#ffffff"
        },
        {
          day: 6,
          icon: "/assets/svg/icon_alles_genommen.svg",
          text: "Testeintrag 3",
          bgcolor: "#ffffff"
        }
      ]
    },

    "Schuebe": {
      type: "dateSlice",
      entries: [
        {
          day: 3,
          text: "",
          bgcolor: "#ffe599",
          duration: 1,
        },
        {
          day: 25,
          icon: "/assets/svg/icon_nichts_genommen.svg",
          text: "Freier Text",
          bgcolor: "#e06666",
          duration: 4,
        },
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
          tooltip: "Tooltip 17 - a long tooltip",
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        },
        {
          day: 30,
          tooltip: "Tooltip 29",
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        }
      ]
    },

    "Gilenya": {
      type: "iconAggregated",
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
          tooltip: "Tooltip 17 - a long tooltip",
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        },
        {
          day: 30,
          tooltip: "Tooltip 29",
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        }
      ]
    },
    "Lib Unknown Test": {
      type: "Lib Unknown Test",
      entries: []
    },
    "Subjektives Wohlbefinden": {
      type: "continuousIcon",
      entries: [
        {
          day: 1,
          value: 1,
          icon: "/assets/svg/icon_alles_genommen.svg"
        },
        {
          day: 3,
          value: 5,
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        },
        {
          day: 10,
          value: 1,
          icon: "/assets/svg/icon_alles_genommen.svg"
        },
        {
          day: 17,
          value: 5,
          icon: "/assets/svg/icon_teilweise_genommen.svg"
        },
        {
          day: 18,
          value: 9,
          icon: "/assets/svg/icon_nichts_genommen.svg"
        },
        {
          day: 27,
          value: 1,
          icon: "/assets/svg/icon_alles_genommen.svg"
        }
      ]
    }
  }

  public iconRowAggregationFunction = (entries: IIconEntry[]) => {
    let weeks: IIconEntry[][] = [[], [], [], [], [], []];
    let firstMonday = new Date(this.year, this.month - 1, 1, 12, 0, 0, 0).getDay() - 1;
    for (let entry of entries) {
      let weekIndex = Math.floor((firstMonday + entry.day) / 7);
      weeks[weekIndex].push(entry);
    }

    let result = weeks.filter(x => x.length > 0).map(x => {
      return <IIconEntry>{
        day: Math.min(...x.map(y => y.day)),
        tooltip: "Number of Entries: " + x.length,
        icon: x.length >= 1 ? x[0].icon : "",
      };
    });

    return result;
  }

  public ngOnInit() {
    this.loadSampleData(this.year, this.month);
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
