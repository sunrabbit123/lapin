import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Parent } from "./Parent";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";

@Entity()
export class Child extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @ManyToOne((target) => Parent, (parent) => parent.children, { lazy: true })
    public parent: Promise<Parent> | Parent;
}
