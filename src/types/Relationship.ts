import { BaseTable } from "./BaseTable";
import { getFieldKeyByTable } from "./util";

export type Relationship<T extends BaseTable> = T;
export module Relationship {
    export type TargetType<
        Own extends BaseTable,
        RelationField extends getFieldKeyByTable<Own, Relationship<any>>,
    > = never;

    export type ManyToMany<T extends BaseTable> = T[];
    export type OneToMany<T extends BaseTable> = T[];
    export type ManyToOne<T extends BaseTable> = T;
    export type OneToOne<T extends BaseTable> = T;
}
