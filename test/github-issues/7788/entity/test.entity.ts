import {
    BaseEntity,
    Column,
    Entity,
    ObjectIdColumn,
    PrimaryColumn,
} from "../../../../src";

@Entity("test")
export class TestEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
}
