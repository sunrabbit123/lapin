import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { Post } from "./Post";
import { RelationId } from "../../../../src/decorator/relations/RelationId";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    firstId: number;

    @PrimaryColumn()
    secondId: number;

    @Column()
    name: string;

    @ManyToOne((type) => Post, (post) => post.categories)
    post: Post | null;

    @RelationId((category: Category) => category.post)
    postId: number;

    @ManyToMany((type) => Post, (post) => post.manyCategories)
    manyPosts: Post[];

    @RelationId((category: Category) => category.manyPosts)
    manyPostIds: number[];
}
