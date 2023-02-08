import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { TicketProduct } from "./TicketProduct";

@Entity()
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    shopId: string;

    @Column()
    chainId: string;

    @OneToMany((type) => TicketProduct, (ticketProduct) => ticketProduct.ticket)
    ticketItems: TicketProduct[];
}
