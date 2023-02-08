import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

export class Information {
    @Column()
    maritalStatus: string;

    @Column()
    gender: string;

    @Column()
    address: string;
}
