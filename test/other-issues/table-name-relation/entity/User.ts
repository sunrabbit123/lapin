import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne,
    JoinColumn,
    BaseEntity,
} from "../../../../src";
import { Photo } from "./Photo";
import { Profile } from "./Profile";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany("photographs", "user")
    photos: Photo[];

    @OneToOne("profiles")
    @JoinColumn()
    profile: Profile;
}
