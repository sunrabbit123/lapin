import { Entity } from "../../../../../src/decorator/entity/Entity";
import { ManyToOne } from "../../../../../src/decorator/relations/ManyToOne";
import { Post } from "./Post";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PrimaryColumn } from "../../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @ManyToOne((type) => Post, (post) => post.categories)
    post: Post;

    @Column()
    name: string;
}
