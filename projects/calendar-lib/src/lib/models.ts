export type Groups = RowOrGroup[]

export interface IRow {
    name: string;
    key: string;
    fontStyle?: IFontStyle;
}

export interface IGroup extends IRow{
    name: string;
    key: string;
    isCollapsed: boolean;
    subs: RowOrGroup[];
    fontStyle?: IFontStyle;
}

export type RowOrGroup = IRow | IGroup;

export type Entries = { [key: string]: KnownEntries }

export type KnownEntries = KnownEntry<"document", IDocumentEntry> | KnownEntry<"icon", IIconEntry> | KnownEntry<string, any>;

export type KnownEntry<TKey, TEntry> = { type: TKey, entries: TEntry[] }

export interface IIconEntry {
    day: number;
    tooltip: string;
    icon: string;
}

export interface IDocumentEntry {
    day: number;
    link: string;
    name: string;
}

export interface IFontStyle {
    isBold: boolean;
    isItalic: boolean;
}

export interface IRowData {
    entries: any[];
    type: string;
    columnWidth: number;
    numberOfDays: number;
    useCompactLayout: boolean;
    firstLineInCompactLayoutOffset: number;
}
