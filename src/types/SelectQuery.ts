import { BaseTable } from "./BaseTable";
import { getFieldKeyByTable } from "./util";

export type Selected<Table extends BaseTable<object, undefined | string>> =
  | DotAccessSelect<Table>
  | `${DotAccessSelect<Table>} as ${string}`
  | (Table extends BaseTable<object, infer K> ? K : never) extends infer F
  ? F extends undefined
    ? never
    : F
  : never;

export type DotAccessSelect<
  Table extends BaseTable<object, string | undefined>
> = `${Table extends BaseTable<object, infer K>
  ? K extends undefined
    ? Exclude<getFieldKeyByTable<Table, string>, "_alias">
    : `${K}.${Exclude<getFieldKeyByTable<Table, string>, "_alias">}`
  : never}`;

class Entity1 {
  a: "sadf";
  b: "asdf";
}

class Entity2 {
  c: "asdf";
  d: "asdfsa";
}
type C = "C";
type Some2 =
  | BaseTable<Entity1, undefined>
  | BaseTable<Entity2, "f">
  | BaseTable<Entity1, C>;

type res<T extends BaseTable<object, string | undefined>> = DotAccessSelect<T>;
type Result1 =
  //   ^?
  res<BaseTable<Entity2, "f"> | BaseTable<Entity1, C>>;
type Result2 =
  //   ^?
  res<BaseTable<Entity2, "f">> | res<BaseTable<Entity1, C>>;
