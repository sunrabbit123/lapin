import {
    BaseEntity,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";

@Entity("sample2_post_details")
export class PostDetails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    authorName: string;

    @Column()
    comment: string;

    @Column()
    metadata: string;

    @OneToOne((type) => Post, (post) => post.details, {
        cascade: true,
    })
    post: Post;
}
