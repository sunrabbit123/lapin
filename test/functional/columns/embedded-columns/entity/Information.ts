import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Information extends BaseEntity {
    @Column({ name: "descr" })
    description: string;
}
