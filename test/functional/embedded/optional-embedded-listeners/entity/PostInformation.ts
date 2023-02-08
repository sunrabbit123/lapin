import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { BeforeInsert, BeforeUpdate } from "../../../../../src";
import { PostCounter } from "./PostCounter";

export class PostInformation {
    @Column({ nullable: true })
    description?: string;

    @Column((type) => PostCounter, { prefix: "counters" })
    counters?: PostCounter;

    @BeforeInsert()
    beforeInsert() {
        this.description = "default post description";
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.description = "default post description";
    }
}
