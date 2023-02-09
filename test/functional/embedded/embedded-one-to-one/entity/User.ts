import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Post } from "./Post";
import { OneToOne } from "../../../../../src/decorator/relations/OneToOne";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Post, (post) => post.counters.likedUser)
    likedPost: Post;
}
