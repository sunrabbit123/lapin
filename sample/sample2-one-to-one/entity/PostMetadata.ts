import {
    BaseEntity,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";

@Entity("sample2_post_metadata")
export class PostMetadata extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToOne((type) => Post, (post) => post.metadata)
    post: Post;
}
