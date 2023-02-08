import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    BaseEntity,
} from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Category } from "./Category";

@Entity("questions")
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany("categories")
    @JoinTable()
    categories: Category[];
}
