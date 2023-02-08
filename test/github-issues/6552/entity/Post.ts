import { ObjectID, ObjectIdColumn } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;
}
