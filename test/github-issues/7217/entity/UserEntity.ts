import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

export enum UserRole {
    PLAYER = "PLAYER",
    FULL_GAME = "FULL_GAME",
    SUPERVISOR = "SUPERVISOR",
    REPORTS = "REPORTS",
    ADMIN = "ADMIN",
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: "enum",
        enum: UserRole,
        array: true,
        default: [UserRole.PLAYER],
    })
    roles: UserRole[];
}
