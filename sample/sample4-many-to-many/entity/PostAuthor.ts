import {
    BaseEntity,
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";

@Entity("sample4_post_author")
export class PostAuthor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Post, (post) => post.authors)
    posts: Post[];
}
