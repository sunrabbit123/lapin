import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { OneToMany } from "../../../../../../src/decorator/relations/OneToMany";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany((type) => Category, (category) => category.post)
    categories: Category[];

    categoryCount: number;

    removedCategoryCount: number;
}
