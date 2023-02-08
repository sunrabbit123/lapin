import {
    Column,
    Entity,
    OneToOne,
    JoinColumn,
    PrimaryColumn,
} from "../../../../src";
import { Profile } from "./Profile";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    username: string;

    @OneToOne(() => Profile, {
        nullable: true,
    })
    @JoinColumn()
    profile: Profile | null;
}
