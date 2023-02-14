import { BaseTable } from "./BaseTable";

export type getFieldKeyByTable<
    Table extends BaseTable<object, string>,
    Target,
> = {
    [key in keyof Table]: Table[key] extends Target ? key : never;
}[keyof Table & string];
