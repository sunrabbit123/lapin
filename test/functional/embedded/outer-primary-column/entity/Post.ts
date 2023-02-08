import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { Counters } from "./Counters";

@Entity()
export class Post extends BaseEntity {
    @Column()
    title: string;

    @Column()
    text: string;

    @Column(() => Counters, { prefix: "cnt" })
    counters: Counters;
}
