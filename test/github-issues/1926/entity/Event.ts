import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { EventRole } from "./EventRole";

@Entity()
export class Event extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @OneToMany((type) => EventRole, (role) => role.event, {
        // eager: true,
        // persistence: true,
        cascade: true,
    })
    roles: EventRole[];
}
