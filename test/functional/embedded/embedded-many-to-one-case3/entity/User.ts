import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { OneToMany } from "../../../../../src/decorator/relations/OneToMany";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Post, (post) => post.counters.likedUser)
    likedPosts: Post[];
}
