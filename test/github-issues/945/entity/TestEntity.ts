import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";

@Entity("test_entity")
export class TestEntity extends BaseEntity {
    @PrimaryColumn()
    id1: string;

    @PrimaryColumn()
    id2: string;

    @Column()
    name: string;
}
