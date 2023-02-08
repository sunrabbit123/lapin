import {
    BaseEntity,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { TicketProduct } from "./TicketProduct";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany((type) => TicketProduct, (ticketp) => ticketp.product)
    ticketProduct: TicketProduct[];
}
