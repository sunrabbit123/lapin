import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryColumn } from "../../../../../../../src/decorator/columns/PrimaryColumn";
import { ManyToMany } from "../../../../../../../src/decorator/relations/ManyToMany";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @PrimaryColumn()
    name: string;

    @ManyToMany((type) => Post, (post) => post.counters.subcntrs.watchedUsers)
    posts: Post[];

    postIds: number[];
}
