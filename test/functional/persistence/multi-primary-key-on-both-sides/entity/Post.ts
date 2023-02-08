import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { ManyToOne } from "../../../../../src/decorator/relations/ManyToOne";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    firstId: number;

    @PrimaryColumn()
    secondId: number;

    @Column()
    title: string;

    @ManyToOne((type) => Category, (category) => category.posts)
    category: Category;
}
