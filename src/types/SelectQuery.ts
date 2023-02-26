import { SelectQueryBuilder } from "../query-builder/SelectQueryBuilder";
import { BaseTable } from "./BaseTable";
import { getFieldKeyByTable } from "./util";

export type Selected<Table extends BaseTable<object, undefined | string>> =
  | (Table extends BaseTable<object, infer K>
      ? K extends string
        ? K
        : never
      : never)
  | DotAccessSelect<Table>
  | `${DotAccessSelect<Table>} as ${string}`;

export type DotAccessSelect<
  Table extends BaseTable<object, string | undefined>,
> = `${Table extends BaseTable<object, infer K>
  ?
      | (K extends undefined
          ? getFieldKeyByTable<Table, string>
          : `${K}.${Exclude<getFieldKeyByTable<Table, string>, "_alias">}` | K)
      | Exclude<getFieldKeyByTable<Table, string>, "_alias">
  : never}`;

class Entity1 {
  a: "sadf";
  b: "asdf";
}

class Entity2 {
  c: "asdf";
  d: "asdfsa";
}

// ^?
type C = "C";
type Some2 =
  | BaseTable<Entity1, undefined>
  | BaseTable<Entity2, "f">
  | BaseTable<Entity1, C>;

type res<T extends BaseTable<object, string | undefined>> = Selected<T>;
type Result1 =
  //   ^?
  res<Some2>;
type Result2 =
  //   ^?
  (res<BaseTable<Entity2, "f">> | res<BaseTable<Entity1, undefined>>) & string;
type Result3 =
  //   ^?
  Exclude<
    getFieldKeyByTable<BaseTable<Entity1, undefined | string>, string>,
    "_alias"
  >;
type Result4 = res<BaseTable<Entity1, undefined> | BaseTable<Entity2, "f">>;
//   ^?
