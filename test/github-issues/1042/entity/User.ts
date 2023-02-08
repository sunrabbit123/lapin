import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Profile } from "./Profile";
import { Information } from "./Information";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    registeredAt: Date;

    @Column("json")
    profile: Profile;

    @Column((type) => Information)
    information: Information;
}
