import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { Ticket } from "./Ticket";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Request extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    owner: string;

    @Column()
    type: string;

    @Column()
    success: boolean;

    @OneToOne((type) => Ticket, (ticket) => ticket.request)
    ticket: Ticket;
}
