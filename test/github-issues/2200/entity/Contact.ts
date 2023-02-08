import {
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
} from "../../../../src/index";
import { Booking } from "./Booking";

@Entity()
export class Contact extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany((type) => Booking, (booking) => booking.contact)
    bookings: Booking[];
}
