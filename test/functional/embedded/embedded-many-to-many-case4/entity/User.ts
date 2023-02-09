import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { ManyToMany } from "../../../../../src/decorator/relations/ManyToMany";
import { Post } from "./Post";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @PrimaryColumn()
    personId: number;

    @Column()
    name: string;

    @ManyToMany((type) => Post, (post) => post.counters.likedUsers)
    likedPosts: Post[];
}
