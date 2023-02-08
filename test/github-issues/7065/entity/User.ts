import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Email } from "./Email";
import { Phone } from "./Phone";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Email, (email) => email.user, { cascade: true })
    emails: Email[];

    @OneToMany(() => Phone, (phone) => phone.user, { cascade: true })
    phones: Phone[];
}
