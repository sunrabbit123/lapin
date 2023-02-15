import { BaseTable } from "./BaseTable";
import { getFieldKeyByTable } from "./util";

export type Selected<Table extends BaseTable<object, string>> =
    Table extends infer T
        ? DotAccessSelect<Table> | `${DotAccessSelect<Table>} as ${string}`
        : never;

type DotAccessSelect<Table extends BaseTable<object, string>> =
    `${Table extends BaseTable<object, infer K>
        ? K extends ""
            ? ""
            : `${K}.`
        : ""}${Exclude<getFieldKeyByTable<Table, string>, "_alias">}`;

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
    | BaseTable<Entity1>
    | BaseTable<Entity2, "f">
    | BaseTable<Entity1, C>;

type Some = Selected<Some2>;
//   ^?
