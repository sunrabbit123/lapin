import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Counters {
    @Column()
    stars: number;

    @Column()
    commentCount: number;

    @Column()
    metadata: string;
}
