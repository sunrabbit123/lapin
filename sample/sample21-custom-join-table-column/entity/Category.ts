import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { ManyToMany } from "../../../src/decorator/relations/ManyToMany";
import { Post } from "./Post";

@Entity("sample21_category")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Post, (post) => post.categories)
    posts: Post[];
}
