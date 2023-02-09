import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";

export class Subcounters extends BaseEntity {
    @PrimaryColumn()
    version: number;

    @Column()
    watches: number;
}
