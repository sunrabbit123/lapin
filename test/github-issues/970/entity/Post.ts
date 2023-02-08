import { BaseEntity, Column, Entity } from "../../../../src";
import { ObjectIdColumn } from "../../../../src/decorator/columns/ObjectIdColumn";
import { ObjectID } from "../../../../src/driver/mongodb/typings";

@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    text: string;
}
