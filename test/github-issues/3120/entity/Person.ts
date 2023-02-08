import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { Address } from "./Address";
import { Company } from "./Company";
import { Passport } from "./Passport";

@Entity()
export class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Company)
    company: Company;

    @ManyToMany((type) => Address, (address) => address.people)
    @JoinTable()
    addresses: Address[];

    @OneToOne((type) => Passport, (passport) => passport.owner)
    @JoinColumn()
    passport: Passport;
}
