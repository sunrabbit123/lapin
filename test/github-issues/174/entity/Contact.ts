import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

export class Contact {
    @Column()
    name: string;

    @Column()
    email: string;
}
