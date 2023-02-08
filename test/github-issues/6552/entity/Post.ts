import { ObjectID, ObjectIdColumn } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;
}
