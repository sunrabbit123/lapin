import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { VersionColumn } from "../../../../../src/decorator/columns/VersionColumn";

export class Subcounters {
    @VersionColumn()
    version: number;

    @Column()
    watches: number;
}
