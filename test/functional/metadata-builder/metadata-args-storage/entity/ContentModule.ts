import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Unit } from "./Unit";

export class ContentModule extends Unit {
    @Column()
    tag: string;
}
