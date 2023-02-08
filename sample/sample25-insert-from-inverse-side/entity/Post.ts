import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Author } from "./Author";
import { ManyToOne } from "../../../src/decorator/relations/ManyToOne";

@Entity("sample25_post")
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne((type) => Author, (author) => author.posts)
    author: Author;
}
