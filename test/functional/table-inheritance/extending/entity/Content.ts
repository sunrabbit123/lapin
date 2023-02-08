import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Unit } from "./Unit";

export class Content extends Unit {
    @Column()
    name: string;
}
