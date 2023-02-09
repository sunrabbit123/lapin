import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Counters extends BaseEntity {
    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;
}
