import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity("Foo")
export class FooEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("datetime2", { precision: 0 })
    date: Date;
}
