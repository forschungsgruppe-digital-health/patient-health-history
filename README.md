# health-history

## Aufbau des Projekts

- _dist_  
  Hierin werden die Projekte gebaut.
- _node_modules_  
  Node Paketverzeichnis
- _projects_
  - _calendar-lib_  
    Enthält die Bilbiothek mit dem _calendar_-Control
  - _calendar-test_  
    Enthält die Test-Anwendung. Für Details siehe [Test-Anwendung](#calendar-test)

## Node Scripts

- `npm run build-lib`  
  Erstellt die Bibliothek und wartet auf Änderungen von zugehörigen Dateien und stößt ggf. einen neuen build-Vorgang an.
- `npm run serve-test`  
  Erstellt die Test-Anwendung und wartet auf Änderungen vonzugehörigen Dateien und stößt ggf. einen neuen build-Vorgang an. Sollte die Bibliothek neu gebaut werden, so wird auch die Test-Anwendung neu gebaut. Der Befehl stellt einen Development-Sever auch <http://localhost:4200/> bereit.

## <a name="calendar-lib"></a> Bilbiothek

### Components

#### Allgemeine Components

- `CalendarComponent`  
  Die Haupt-Component welche das obere Navigationsmenü und das Grid mit einander verbindet.
- `NavigationComponent`  
  Enthält die Überschrift als auch Controls zum Navigieren durch die Monate.
- `GridComponent`  
  Das eigentliche Tabellenartige Grid welches aus mehreren Zeilen aufgebaut ist.

#### Grid Components

Die Haupt-Component ist die `GridComponent`. Diese rendert das Grid in Form mehrerer Zeilen. Über die Daten der `groups`-Eigenschaft wird iteriert und für jeden Eintrag eine `GridRowOrGroup` erzeugt. Diese erzeugt dann, abhängig davon ob eine einzelne Zeile (`IRow`) oder eine Gruppe (`IGroup`) übergeben wurde entweder nur ein Paar aus einem Zeilen-Kopf (`GridRowHeaderComponent`) und einer `GridRowComponent` oder zusätzlich eine Instanz von sich selbst um die untergeordneten Zeilen zu erzeugen.

Innerhalb von `GridComponent` gibt es 2 konstanten:

- `compactLayoutMaxWidth: number = 720`  
  Die maximale Breite des kompakten Layouts (bei dem Zeilenköpfe über der eigentlichen Zeile stehen) bavor es zum normalen Layout umbricht.
- `minRowHeaderWidth: number = 250`  
  Die Mindestbreite der Zeilenköpfe.

Die `GridRowHeaderComponent` erzeugt den Zeilenkopf einer Zeile. Ihr übergeben werden Styling-Informationen als auch Informationen darüber wie breit sie dargestellt sein soll. Ab einer gewissen Maximalbreite füllt die die gesamte zur Verfügung stehende Breite aus und die `GridRowComponent` dahinter bricht in eine neue Zeile um und füllt diese wiederum in volelr Breite aus.

Die `GridRowComponent` nutzt das der `CalendarComponent` übergebene `ng-template` um anhand der zur Verfügung stehenden Daten eine passende Zeile zu rendern. Dabei wird dem template im `data`-Parameter ein Objekt mit den Daten für diese Zeile übergeben. Dieses kann anschließend im Template selbst ausgewertet werden:

```HTML
<ng-template #rowTemplate let-data="data">

    <lib-grid-icon-row *ngIf="data.entries && data.type == 'icon'" [columnWidth]="data.columnWidth"
        [numberOfDays]="data.numberOfDays" [entries]="data.entries" [useCompactLayout]="data.useCompactLayout">
    </lib-grid-icon-row>

    ...

</ng-template>
```

Immer zwischen 2 Zeilen sowie über und unter allen zeilen wird eine `GridRowLine` angezeigt. Diese zeichnet lediglich den horizntalen Querstrich zwischen 2 Zeilen.

#### Row-Components

Die Bilbiothek stellt verschiedene Components zum erzeugen von Zeilen-Inhalten bereit. Es können innerhalb des übergebenen Templates aber auch eigene Components benutzt werden um benutzerdefinierte Zeilen zu rendern. Diese müsen sich ggf. an die Render-Daten aus dem übergebenen `data`-Parameter halten. Dies betrifft insbesondere welche Spalten-Striche und wie breit die gesamte Component gerendert werden soll.

`GridSimpleRowComponent` stellt die einfachste Art von Zeile dar. Diese zeigt lediglich die senkrechten Striche des Grids an. Sie stellt alle dafür notwendigen Eigenschaften bereit die auch alle anderen Row-Components benötigen. Daher leiten sich alle anderen Row-Components von dieser ab (teilweise über Zwischenklassen).

`GridEntriesRow` ist eine generische Basis-Klasse ohne Template welche von `GridSimpleRowComponent` ableitet. Diese stellt zusätzlich eine typisierte `entries`-Eigenschaft bereit die angezeigt werden sollen. Alle nachfolgenden Row-Components leiten von diese Component ab.

`GridIconRow` stellt eine Zeile dar bei der für jeden Tag bis zu einem Icon angezeigt wird. Das Icon wird als Pfad im Daten-Modell angegeben. Wenn man mit der Maus über das Icon fährt wird ein Tooltip darunter angezeigt.

`GridDocumentRow` stellt eine Zeile dar bei der an jedem Tag bis zu einem Dokument angezeigt wird. Dieses "Dokument" hat zum einen eine Beschriftung auf der rechten Seite und zum anderen kann man es anklicken und führt dann zu der im Datenmodell hinterlegten URL.

### _models.ts_

Diese Datei enthält die Modell-Klassen für die typisierte Übergabe von Daten:

- <a name="calendar-lib_models_Groups"></a>
  `Groups = RowOrGroup[] = (IRow | IGroup)[]`  
  Stellt eine Liste von Einträgen dar welche bestimmen welche Zeilen im Grid angezeigt werden sollen. Jeder Eintrag im Array kann dabei von einem der folgendne Typen sein:
  - `IRow`  
    Stellt eine einzelne Zeile bereit die keine Unter-Zeilen enthält. Jede Zeile benötigt folgende Eigenschaften:
    - `name`  
      Der anzuzeigende Name der Zeile. Steht im Zeilenkopf ganz links.
    - `key`
      Ein im gesamten Array eindeutiger Schlüssel welcher der Zuordnung der Daten dient.
    - _Optional_ `fontStyle`  
      Zum angeben von Formatierungs-Optionen für den Zeilenkopf.
  - `IGroup`  
    Dieser Typ stellt selbst eine Zeile dar und enthält Informationen über dieser Zeile untergeordnete Zeilen. Eigenschaften sind eine Obermenge von denen in `IRow`. Zusätzliche Eigenschaften sind:
    - `subs`  
      Ein Array von Unter-Einträgen vom Typ `RowOrGroup = IRow|IGroup`.
    - `isCollapsed`  
      Gibt den initialen Zustand an ob die Unter-Zeilen angezeigt werden sollen oder nicht.
- <a name="calendar-lib_models_Entries"></a>
  `Entries`  
  Stellt Informationen über die anzuzeigenden Daten in jeder Zeile des Grids bereit. `Entries` ist dabei ein Objekt wobei dessen Eigenschaften vom Typ `string` den Keys aus [Groups](#calendar-lib_models_Groups) entsprechen muss. Der Wert dieser Eigenschaften ist dann wiederum ein `KnownEntry<TKey, TEntry>`:
  - `TKey` stellt ein beliebigen `string` dar mit dem der Typ der Zeile eindeutig bestimmt werden kann. Vorgegebene `TKey`s der in der Bilbiothek vorhandenen Components sind nachfolgend aufgelistet. Abseits dieser können beliebig weitere `TKey` für eigene Datentypen vergeben werden.
    - `icon` mit zugehörigem Modell `IIconEntry` und der Component `GridIconRowComponent`
    - `document` mit zugehörigem Modell `IDocumentEntry` und der Component `GridDocumentRowComponent`

Weiterhin sind auch Modell-Klassen für die typisierte Übergabe Zeilenspezifischer Daten anthalten:

- `IIconEntry` für die Component `GridIconRowComponent`
- `IDocumentEntry` für die Component `GridDocumentRowComponent`

## <a name="calendar-test"></a> Test-Anwendung

Die Test-Anwendung baut lediglich ein Rahmen-Projekt um die components der Bilbiothek zu testen. Die wesentlichen Teile sind die folgenden:

- _app.component.html_  
  Enthält die eingebundene `CalendarComponent` als auch Datenbindungen und ein template für die anzuzeigenden Zeilen im Grid.
- _app.component.ts_
  Enthält Code für die Datenbindungen die die `CalendarComponent` mit Daten befüllt. Besonders nennenswert sind hierbei folgende Member:
  - `month` / `year`  
    Der Monat und das Jahr den die Component gerade anzeigt.
  - `groups`  
    Enthält die anzuzeigenden Zeilen im Grid und ist vom Typ [`Groups` (_models.ts_)](#calendar-lib_models_Groups).
  - `entries`  
    Enthält die anzuzeigenden Daten für jede Zeile im Grid und ist vom Typ [`Entries` (_models.ts_)](#calendar-lib_models_Entries).

## Funktionen und wo sie sich befinden

- _Einklappen und ausklappen von Zeilen_  
  Innerhalb von `GridRowOrGroupComponent`

## Theming

Diverse Elemente innerhalb der Bilbiothek sind mit CSS-Klassennamen ausgestattet, sodass diese von außerhalb mit einem Style versehen werden können.

Alle diese CSS-Klassennamen beginnen mit `calendar-lib_`.

Verfügbare Styles sind in der Test-Anwendung in _styles.scss_ zu finden.
