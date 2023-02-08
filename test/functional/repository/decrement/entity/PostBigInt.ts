import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";

@Entity()
export class PostBigInt extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column("bigint", {
        unsigned: true,
    })
    counter: string;
}
