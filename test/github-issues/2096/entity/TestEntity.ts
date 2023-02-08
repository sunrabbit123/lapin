import { Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class TestEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
