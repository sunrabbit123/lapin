import { Column, OneToMany, PrimaryGeneratedColumn } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Bar } from "./Bar";

@Entity("foo")
export class Foo extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column({ default: "foo description" }) description: string;

    @OneToMany(() => Bar, (bar) => bar.foo, { cascade: true, eager: true })
    bars?: Bar[];
}
