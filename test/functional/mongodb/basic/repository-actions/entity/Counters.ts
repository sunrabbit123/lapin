import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { User } from "./User";

@Entity()
export class Counters extends BaseEntity {
    @Column({ name: "_likes" })
    likes: number;

    @Column({ name: "_comments" })
    comments: number;

    @Column({ name: "_favorites" })
    favorites: number;

    @Column(() => User)
    viewer: User;
}
