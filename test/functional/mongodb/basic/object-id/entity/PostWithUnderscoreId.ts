import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { ObjectIdColumn } from "../../../../../../src/decorator/columns/ObjectIdColumn";
import { ObjectID } from "../../../../../../src/driver/mongodb/typings";

@Entity()
export class PostWithUnderscoreId extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;
}
