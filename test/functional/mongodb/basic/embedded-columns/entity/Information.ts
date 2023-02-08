import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";

export class Information {
    @Column()
    description: string;

    @Column()
    visible: boolean;

    @Column()
    editable: boolean;
}
