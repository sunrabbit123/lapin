import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../src/index";
import { Post } from "./Post";

@Entity("sample3_post_image")
export class PostImage extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @OneToMany((type) => Post, (post) => post.image)
    posts: Post[];
}
