import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Unique } from "../../../../../src/decorator/Unique";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";

@Entity()
@Unique(["date"])
export class Post {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    date: Date;
}
