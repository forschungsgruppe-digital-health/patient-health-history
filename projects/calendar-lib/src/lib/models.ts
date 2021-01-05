export type Groups = RowOrGroup[]

export interface IRow {
    name: string;
    key: string;
    fontStyle?: IFontStyle;
}

export interface IGroup extends IRow {
    name: string;
    key: string;
    isCollapsed: boolean;
    subs: RowOrGroup[];
    fontStyle?: IFontStyle;
}

export type RowOrGroup = IRow | IGroup;

export type Entries = { [key: string]: KnownEntries }

export type KnownEntries = KnownEntry<"document", IDocumentEntry> | KnownEntry<"icon", IIconEntry> | KnownEntry<"continuousIcon", IcontinuousIconEntry> | KnownEntry<"longtextIcon", IIconLongTextEntry> | KnownEntry<string, any>;

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

export interface IcontinuousIconEntry {
    day: number;
    icon: string;
    value: number;
}

export interface IFontStyle {
    isBold: boolean;
    isItalic: boolean;
}

export interface IIconLongTextEntry {
    day: number;
    icon: string;
    text: string;
    bgcolor: string;
}

export interface IRowData {
    entries: any[];
    type: string;
    columnWidth: number;
    numberOfDays: number;
    useCompactLayout: boolean;
    firstLineInCompactLayoutOffset: number;
}
