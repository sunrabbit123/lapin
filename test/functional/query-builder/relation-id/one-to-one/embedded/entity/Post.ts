import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { Column } from "../../../../../../../src/decorator/columns/Column";
import { Counters } from "./Counters";

@Entity()
export class Post extends BaseEntity {
    @Column()
    title: string;

    @Column(() => Counters)
    counters: Counters;
}
