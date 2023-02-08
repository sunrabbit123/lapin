import {
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    Column,
    TableInheritance,
    BaseEntity,
} from "../../../../src";

import { UserPhoto } from "./UserPhoto";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => UserPhoto, (userPhoto) => userPhoto.user, {
        cascade: true,
    })
    userPhotos: UserPhoto[];
}
