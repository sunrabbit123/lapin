import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";

export class EditHistory {
    @Column()
    title: string;

    @Column()
    text: string;
}
