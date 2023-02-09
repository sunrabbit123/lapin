import { ObjectID, ObjectIdColumn } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity()
export class PostV2 extends BaseEntity {
    @ObjectIdColumn()
    postId: ObjectID;

    @Column()
    title: string;
}
