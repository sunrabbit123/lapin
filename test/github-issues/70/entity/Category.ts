import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Post } from "./Post";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Post, (post) => post.categories, {
        onDelete: "CASCADE",
    })
    post: Post;
}
