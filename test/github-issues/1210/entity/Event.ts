import { ObjectID } from "../../../../src/driver/mongodb/typings";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { ObjectIdColumn } from "../../../../src/decorator/columns/ObjectIdColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Event extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column({ name: "at_date", default: Date.now })
    date: Date;

    // @Column( type => User)
    // participants: User[]
}
