import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { AfterLoad, BeforeInsert } from "../../../../../../src";

export class Information {
    @Column()
    description?: string;

    @Column()
    comments?: number;

    @BeforeInsert()
    beforeInsert() {
        this.description = "description afterLoad";
    }

    @AfterLoad()
    afterLoad() {
        this.comments = 1;
    }
}
