import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
} from "../../../../src";
import { Post } from "./Post";

@Entity()
export class PostReview extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @ManyToOne((type) => Post)
    post: Post;
}
