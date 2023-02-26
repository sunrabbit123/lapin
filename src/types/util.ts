import { BaseTable } from "./BaseTable";

export type getFieldKeyByTable<
  Table extends BaseTable<object, string | undefined>,
  Target,
> = keyof Table & string extends infer K
  ? {
      [key in keyof Table]: Table[key] extends Target ? key : never;
    }[keyof Table & string]
  : never;
