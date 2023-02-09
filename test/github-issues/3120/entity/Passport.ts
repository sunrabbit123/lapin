import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { Person } from "./Person";

@Entity()
export class Passport extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    passportNumber: string;

    @OneToOne((type) => Person, (person) => person.passport)
    owner: Person;
}
