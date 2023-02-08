import {
    BaseEntity,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";

@Entity("sample2_post_information")
export class PostInformation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @OneToOne((type) => Post, (post) => post.information, {
        cascade: ["update"],
    })
    post: Post;
}
