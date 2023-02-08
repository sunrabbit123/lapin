import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";
import { ManyToMany } from "../../../src/decorator/relations/ManyToMany";

@Entity("sample7_post_category")
export class PostCategory extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Post, (post) => post.categories, {
        cascade: true,
    })
    posts: Post[] = [];
}
