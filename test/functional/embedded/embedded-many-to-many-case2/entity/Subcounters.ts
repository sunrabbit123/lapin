import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Subcounters extends BaseEntity {
    @Column()
    version: number;

    @Column()
    watches: number;
}
