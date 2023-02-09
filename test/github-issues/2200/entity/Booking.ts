import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    BaseEntity,
} from "../../../../src";
import { Contact } from "./Contact";

@Entity()
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => Contact, (contact) => contact.bookings, {
        eager: true,
    })
    @JoinColumn({
        name: "contact_id",
    })
    contact: Contact;
}
