import { ObjectID, ObjectIdColumn } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    title: string;
}
