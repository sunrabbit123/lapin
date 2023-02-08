import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { ObjectIdColumn } from "../../../../../../src/decorator/columns/ObjectIdColumn";
import { Counters } from "./Counters";
import { ObjectID } from "../../../../../../src/driver/mongodb/typings";
import { Tags } from "./Tags";

@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column((type) => Counters)
    counters?: Counters;

    @Column((type) => Tags)
    tags?: Tags[];
}
