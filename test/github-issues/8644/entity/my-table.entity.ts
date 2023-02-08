import { Column, PrimaryGeneratedColumn } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
export enum Limit {
    Foo = "foo",
    Bar = "bar",
}

@Entity()
export class MyTable extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "simple-enum", enum: Limit })
    limit: Limit;
}
