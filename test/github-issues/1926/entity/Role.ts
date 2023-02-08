import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { EventRole } from "./EventRole";
import { OneToMany } from "../../../../src";

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @OneToMany((type) => EventRole, (role) => role.role)
    roles: EventRole[];
}
