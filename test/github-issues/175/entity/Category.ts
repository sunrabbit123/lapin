import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { Post } from "./Post";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Post, (post) => post.secondaryCategories)
    post: Post;
}
