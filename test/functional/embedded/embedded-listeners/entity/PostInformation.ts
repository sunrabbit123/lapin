import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PostCounter } from "./PostCounter";
import { BeforeInsert } from "../../../../../src/decorator/listeners/BeforeInsert";
import { Index } from "../../../../../src/decorator/Index";

export class PostInformation extends BaseEntity{
    @Column()
    @Index()
    description: string;

    @Column((type) => PostCounter, { prefix: "counters" })
    counters: PostCounter = new PostCounter();

    @BeforeInsert()
    beforeInsert() {
        this.description = "default post description";
    }
}
