import { Entity, ManyToOne, PrimaryGeneratedColumn } from "../../../../src";
import { Child } from "./Child";

@Entity()
export class Grandchild extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Child, (parent) => parent.children)
    parent?: Child;
}
