import {
    DeleteDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
} from "../../../../src";

@Entity()
export class Configuration extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @DeleteDateColumn()
    deletedAt?: Date;
}
