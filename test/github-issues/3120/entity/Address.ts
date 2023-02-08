import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { Person } from "./Person";

@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @ManyToMany((type) => Person, (person) => person.addresses)
    people: Person[];
}
