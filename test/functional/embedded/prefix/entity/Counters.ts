import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Counters extends BaseEntity {
    @Column({ name: "_likes" })
    likes: number;

    @Column({ name: "_comments" })
    comments: number;

    @Column({ name: "_favorites" })
    favorites: number;
}
