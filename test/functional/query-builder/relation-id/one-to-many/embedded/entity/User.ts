import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { ManyToOne } from "../../../../../../../src/decorator/relations/ManyToOne";
import { JoinColumn } from "../../../../../../../src/decorator/relations/JoinColumn";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Post, (post) => post.counters.subcounters.watchedUsers)
    @JoinColumn()
    posts: Post[];
}
