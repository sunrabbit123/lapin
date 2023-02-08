import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src/index";
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
