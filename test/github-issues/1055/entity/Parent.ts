import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Child } from "./Child";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";

@Entity()
export class Parent extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany((target) => Child, (child) => child.parent, { lazy: true })
    public children: Promise<Child[]>;
}
