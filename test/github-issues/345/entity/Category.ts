import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
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
