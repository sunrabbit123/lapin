import {
    BaseEntity,
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";

@Entity("sample4_post_information")
export class PostInformation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToMany((type) => Post, (post) => post.informations, {
        cascade: ["update"],
    })
    posts: Post[];
}
