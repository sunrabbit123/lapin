import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
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
