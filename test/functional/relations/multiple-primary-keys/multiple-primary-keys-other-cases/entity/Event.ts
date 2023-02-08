import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { OneToMany } from "../../../../../../src/decorator/relations/OneToMany";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { ManyToOne } from "../../../../../../src/decorator/relations/ManyToOne";
import { EventMember } from "./EventMember";
import { Person } from "./Person";

@Entity()
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Person)
    author: Person;

    @OneToMany((type) => EventMember, (member) => member.event)
    members: EventMember[];
}
