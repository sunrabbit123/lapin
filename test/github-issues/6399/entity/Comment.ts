import {
    Entity,
    ManyToOne,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    BaseEntity,
} from "../../../../src";
import { Post } from "./Post";

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    postId: number;

    @ManyToOne(() => Post, (entity) => entity.comments)
    @JoinColumn({
        name: "postId",
    })
    post?: Post;
}
