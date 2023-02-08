import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryColumn } from "../../../../../../../src/decorator/columns/PrimaryColumn";
import { ManyToOne } from "../../../../../../../src/decorator/relations/ManyToOne";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @PrimaryColumn()
    name: string;

    @ManyToOne((type) => Post, (post) => post.counters.subcounters.watchedUsers)
    post: Post;
}
