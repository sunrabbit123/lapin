import { Column, Entity, PrimaryColumn } from "../../../../src";

export enum Role {
    GuildMaster = "Guild Master",
    Officer = "Officer",
    Boss = 'BOSS "LEVEL 80"',
    Warrior = "Knight\\Rogue",
    Number = 1,
    PlayerAlt = "Player Alt",
}

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({ type: "enum", enum: Role, default: Role.GuildMaster })
    role: Role;

    @Column({
        type: "enum",
        enum: Role,
        default: [Role.GuildMaster],
        array: true,
    })
    roles: Role[];
}
