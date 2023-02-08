import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Post } from "./Post";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany((type) => Post, (post) => post.categories)
    posts: Post[];
}
