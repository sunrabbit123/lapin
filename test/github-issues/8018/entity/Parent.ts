import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Child } from "./Child";

@Entity()
export class Parent extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name?: string;

    @OneToMany(() => Child, (child) => child.parent)
    children?: Child[];
}
