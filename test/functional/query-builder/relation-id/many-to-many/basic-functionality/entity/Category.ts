import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../../../src/decorator/columns/Column";
import { ManyToMany } from "../../../../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../../../../src/decorator/relations/JoinTable";
import { Post } from "./Post";
import { Image } from "./Image";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Post, (post) => post.categories)
    posts: Post[];

    @ManyToMany((type) => Image)
    @JoinTable()
    images: Image[];

    imageIds: number[];

    postIds: number[];
}
