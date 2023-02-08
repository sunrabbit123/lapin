import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import {
    OneToMany,
    Column,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { User } from "./User";

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @OneToMany((_) => User, (user) => user.role, { cascade: true })
    users: User[];

    @DeleteDateColumn()
    deleteDate?: Date;
}
