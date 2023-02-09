import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { ManyToMany } from "../../../../../src/decorator/relations/ManyToMany";
import { Subcounters } from "./Subcounters";
import { User } from "./User";

export class Counters extends BaseEntity {
    @Column()
    code: number;

    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;

    @Column(() => Subcounters, { prefix: "subcnt" })
    subcounters: Subcounters;

    @ManyToMany((type) => User, (user) => user.likedPosts)
    likedUsers: User[];
}
