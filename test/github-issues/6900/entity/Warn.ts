import {
    Entity,
    ObjectID,
    ObjectIdColumn,
    Column,
    BaseEntity,
} from "../../../../src";

@Entity("warnings")
export class Warn extends BaseEntity {
    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    guild!: string;

    @Column()
    user!: string;

    @Column()
    moderator!: string;

    @Column()
    reason!: string;

    @Column()
    createdAt!: Date;
}
