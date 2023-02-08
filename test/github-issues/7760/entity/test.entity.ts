import { BaseEntity, Column, Entity, ObjectIdColumn } from "../../../../src";

@Entity("test")
export class TestEntity extends BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    testId: string | null;
}
