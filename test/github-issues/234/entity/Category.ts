import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Post } from "./Post";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Post, (post) => post.category)
    posts: Promise<Post[]>;
}
