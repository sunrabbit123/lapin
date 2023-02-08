import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";
import { OneToMany } from "../../../src/decorator/relations/OneToMany";

@Entity("sample5_post_author")
export class PostAuthor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Post, (post) => post.author)
    posts: Post[];
}
