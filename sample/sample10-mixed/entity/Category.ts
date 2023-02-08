import {
    BaseEntity,
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Post } from "./Post";
import { PostDetails } from "./PostDetails";

@Entity("sample10_category")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToMany((type) => Post, (post) => post.categories)
    posts: Post[];

    @ManyToOne((type) => PostDetails, (postDetails) => postDetails.categories)
    details: PostDetails;
}
