import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { ManyToMany } from "../../../../../src/decorator/relations/ManyToMany";
import { Post } from "./Post";
import { JoinTable } from "../../../../../src/decorator/relations/JoinTable";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Post, (post) => post.counters.likedUsers)
    @JoinTable()
    likedPosts: Post[];
}
