import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { OneToMany } from "../../../src/decorator/relations/OneToMany";
import { Post } from "./Post";

@Entity("sample25_author")
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Post, (author) => author.author)
    posts: Post[];
}
