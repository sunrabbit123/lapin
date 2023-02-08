import {
    BaseEntity,
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";

@Entity("sample4_post_image")
export class PostImage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToMany((type) => Post, (post) => post.images)
    posts: Post[];
}
