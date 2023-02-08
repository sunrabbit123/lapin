import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Information } from "./Information";

export class Counters extends BaseEntity {
    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;

    @Column((type) => Information, { prefix: "info" })
    information: Information;

    @Column((type) => Information, { prefix: "testData" })
    data: Information;

    @Column((type) => Information, { prefix: "" })
    dataWithoutPrefix: Information;
}
