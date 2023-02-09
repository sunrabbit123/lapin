import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { User } from "./User";

@Entity()
export class UserMeta extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    foo: number;

    @Column()
    bar: number;

    @Column({ nullable: false })
    userId: number;

    @OneToOne(() => User)
    @JoinColumn({ name: "userId", referencedColumnName: "id" })
    user: User;
}
