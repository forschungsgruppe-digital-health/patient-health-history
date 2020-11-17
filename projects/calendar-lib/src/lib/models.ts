export type Groups = RowOrGroup[]

export interface IGroup {
    name: string;
    isCollapsed: boolean;
    subs: RowOrGroup[];
}

export interface IRow {
    name: string;
    key: string;
}

export type RowOrGroup = IRow | IGroup;