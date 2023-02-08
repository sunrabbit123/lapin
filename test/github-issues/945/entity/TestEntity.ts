import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity("test_entity")
export class TestEntity {
    @PrimaryColumn()
    id1: string;

    @PrimaryColumn()
    id2: string;

    @Column()
    name: string;
}
