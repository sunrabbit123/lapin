import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity("test")
export class Test extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "datetime", nullable: true, default: null })
    publish_date: Date;
}
