import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    isRemoved: boolean = false;

    @ManyToMany((type) => Category, (category) => category.posts)
    @JoinTable()
    categories: Category[];

    categoryCount: number;

    removedCategoryCount: number;
}
