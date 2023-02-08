import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Post } from "./Post";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    name: string;

    @ManyToMany(() => Post, (post) => post.categories)
    @JoinTable()
    posts: Post[];
}
