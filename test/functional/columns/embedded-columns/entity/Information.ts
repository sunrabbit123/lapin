import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Information {
    @Column({ name: "descr" })
    description: string;
}
