import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity("user", { database: "db_2" })
export class SpecificUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
