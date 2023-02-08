import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { Post } from "./Post";
import { Image } from "./Image";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    isRemoved: boolean = false;

    @ManyToMany((type) => Post, (post) => post.categories)
    posts: Post[];

    @ManyToMany((type) => Image, (image) => image.categories)
    @JoinTable()
    images: Image[];

    postCount: number;

    removedPostCount: number;

    imageCount: number;

    removedImageCount: number;
}
