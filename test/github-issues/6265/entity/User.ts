import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import {
    ManyToOne,
    Column,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Role } from "./Role";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((_) => Role, (role) => role.users)
    role: Role;

    @DeleteDateColumn()
    deleteAt?: Date;
}
