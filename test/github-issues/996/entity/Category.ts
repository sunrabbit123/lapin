import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Post } from "./Post";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Post, (post) => post.categories)
    post: Promise<Post>;
}
