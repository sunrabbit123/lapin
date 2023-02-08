import { Entity } from "../../../../src/decorator/entity/Entity";
import { ObjectIdColumn } from "../../../../src/decorator/columns/ObjectIdColumn";
import { ObjectID } from "../../../../src/driver/mongodb/typings";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    text: string;
}
