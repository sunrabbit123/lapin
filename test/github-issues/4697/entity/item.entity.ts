import {
    Entity,
    ObjectIdColumn,
    ObjectID,
    Column,
    BaseEntity,
} from "../../../../src";

@Entity()
export class Item extends BaseEntity {
    @ObjectIdColumn()
    public _id: ObjectID;

    /**
     * @deprecated use contacts instead
     */
    @Column()
    public contact?: string;

    @Column({ array: true })
    public contacts: Array<string>;

    @Column({ type: "json" })
    config: any;
}
