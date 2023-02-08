import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Information } from "./Information";

export class SimpleCounters {
    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;

    @Column((type) => Information, { prefix: "info" })
    information: Information;
}
