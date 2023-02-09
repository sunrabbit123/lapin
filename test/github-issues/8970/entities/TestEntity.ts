import {
    BaseEntity,
    Column,
    Entity,
    ObjectIdColumn,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class TestEntity extends BaseEntity {
    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    testColumn: string;
}
