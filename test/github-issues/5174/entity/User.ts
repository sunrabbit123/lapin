import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn, ManyToOne } from "../../../../src";
import { Role } from "./Role";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @ManyToOne((_) => Role, (role) => role.users)
    role: Role;
}
