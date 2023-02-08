import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Category } from "./Category";

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany("Category")
    @JoinTable()
    categories: Category[];
}
