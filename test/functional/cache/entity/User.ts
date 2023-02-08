import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { OneToMany } from "../../../../src";
import { Address } from "./Address";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    isAdmin: boolean;

    @OneToMany(() => Address, (a) => a.user)
    addresses: Address[];
}
