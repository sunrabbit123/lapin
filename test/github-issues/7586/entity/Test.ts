import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class TestEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    type: string;
}
