import {
    Entity,
    ObjectIdColumn,
    ObjectID,
    Column,
    BaseEntity,
} from "../../../../src";

/**
 * @deprecated use item config instead
 */
@Entity()
export class Config extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    itemId: string;

    @Column({ type: "json" })
    data: any;
}
