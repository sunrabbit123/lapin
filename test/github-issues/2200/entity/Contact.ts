import { Entity, PrimaryGeneratedColumn, OneToMany } from "../../../../src";
import { Booking } from "./Booking";

@Entity()
export class Contact extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany((type) => Booking, (booking) => booking.contact)
    bookings: Booking[];
}
