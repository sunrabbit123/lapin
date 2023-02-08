import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { User } from "./User";

@Entity()
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(() => User)
    user: User;
}
