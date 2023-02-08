import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { ManyToOne } from "../../../../../src/decorator/relations/ManyToOne";
import { Category } from "./Category";
import { PrimaryColumn } from "../../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    categoryId: number;

    @ManyToOne((type) => Category, (category) => category.posts, {
        cascade: ["insert"],
    })
    category: Category;

    @Column()
    title: string;
}
