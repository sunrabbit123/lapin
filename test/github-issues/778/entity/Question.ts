import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "smallint" })
    id: number;

    @Column()
    name: string;
}
