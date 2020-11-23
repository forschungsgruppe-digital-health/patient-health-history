export type Groups = RowOrGroup[]

export interface IGroup {
    name: string;
    isCollapsed: boolean;
    subs: RowOrGroup[];
    fontStyle?: IFontStyle;
}

export interface IRow {
    name: string;
    key: string;
    fontStyle?: IFontStyle;
}

export type RowOrGroup = IRow | IGroup;

export type Entries = { [key: string]: KnownEntries }

export type KnownEntries = KnownEntry<"document", IDocumentEntry> | KnownEntry<"icon", IIconEntry>;

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
