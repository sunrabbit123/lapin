import {
    BaseEntity,
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "../../../src";
import { PostCategory } from "./PostCategory";
import { PostAuthor } from "./PostAuthor";
import { ManyToOne } from "../../../src/decorator/relations/ManyToOne";
import { JoinTable } from "../../../src/decorator/relations/JoinTable";

@Entity("sample5_post")
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne((type) => PostAuthor, (post) => post.posts, {
        cascade: true,
    })
    author: PostAuthor;

    @ManyToMany((type) => PostCategory, (category) => category.posts, {
        cascade: true,
    })
    @JoinTable()
    categories: PostCategory[] = [];
}
