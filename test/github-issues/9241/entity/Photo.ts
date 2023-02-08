import {
    OneToMany,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from "../../../../src";

import { UserPhoto } from "./UserPhoto";

@Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => UserPhoto, (userPhoto) => userPhoto.photo, {
        cascade: true,
    })
    userPhotos: UserPhoto[];
}
