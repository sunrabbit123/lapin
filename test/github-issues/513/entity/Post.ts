import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn("int")
    id: number;

    @Column({ type: "datetime", nullable: true })
    dateTimeColumn: Date;

    @Column({ type: "time", nullable: true })
    timeColumn: Date;
}
