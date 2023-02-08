import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Post } from "./Post";
import { OneToMany } from "../../../../../src/decorator/relations/OneToMany";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    categoryId: number;

    @Column()
    name: string;

    @OneToMany((type) => Post, (post) => post.category)
    posts: Post[];
}
