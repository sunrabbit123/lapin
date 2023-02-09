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

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany("Photo", "user")
    photos: Photo[];

    @OneToOne("Profile")
    @JoinColumn()
    profile: Profile;
}
