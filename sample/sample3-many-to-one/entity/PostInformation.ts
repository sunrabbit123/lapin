import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";

@Entity("sample3_post_information")
export class PostInformation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @OneToMany((type) => Post, (post) => post.information, {
        cascade: ["update"],
    })
    posts: Post[];
}
