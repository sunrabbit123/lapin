import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Person } from "./Person";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("uuid")
    personId: string;

    @OneToOne(() => Person, { cascade: true, onDelete: "CASCADE" })
    person: Person;
}
