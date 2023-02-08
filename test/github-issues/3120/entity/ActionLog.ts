import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { ActionDetails } from "./ActionDetails";
import { Address } from "./Address";
import { Person } from "./Person";

@Entity()
export class ActionLog extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    action: string;

    @ManyToOne((type) => Person, {
        createForeignKeyConstraints: false,
    })
    person: Person;

    @ManyToMany((type) => Address, {
        createForeignKeyConstraints: false,
    })
    @JoinTable()
    addresses: Address[];

    @OneToOne((type) => ActionDetails, {
        createForeignKeyConstraints: false,
    })
    @JoinColumn()
    actionDetails: ActionDetails;
}
