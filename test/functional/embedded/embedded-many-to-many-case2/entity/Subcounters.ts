import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Subcounters {
    @Column()
    version: number;

    @Column()
    watches: number;
}
