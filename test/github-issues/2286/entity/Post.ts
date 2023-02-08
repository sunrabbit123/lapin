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

    @Column()
    dateTimeColumn: Date;
}
