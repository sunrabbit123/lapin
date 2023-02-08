import {
    Column,
    PrimaryColumn,
    ManyToOne,
    Entity,
    BaseEntity,
} from "../../../../src";

import { User } from "./User";
import { Photo } from "./Photo";

@Entity()
export class UserPhoto extends BaseEntity {
    @Column()
    isProfilePhoto: boolean;

    @ManyToOne(() => User, (user) => user.userPhotos, { nullable: false })
    user: User;

    @PrimaryColumn()
    userId: User["id"];

    @ManyToOne(() => Photo, (photo) => photo.userPhotos, { nullable: false })
    photo: Photo;

    @PrimaryColumn()
    photoId: Photo["id"];
}
