import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PostEmbedded } from "./PostEmbedded";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";

@Entity()
export class PostComplex extends BaseEntity {
    @PrimaryColumn()
    firstId: number;

    @Column({ default: "Hello Complexity" })
    text: string;

    @Column((type) => PostEmbedded)
    embed: PostEmbedded;
}
