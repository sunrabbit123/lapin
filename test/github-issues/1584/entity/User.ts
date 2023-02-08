import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ObjectIdColumn } from "../../../../src/decorator/columns/ObjectIdColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { ObjectID } from "../../../../src/driver/mongodb/typings";

@Entity()
export class User extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;
}
