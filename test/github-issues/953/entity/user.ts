import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

export type Role = "sa" | "user" | "admin" | "server";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 32,
        unique: true,
    })
    username: string;

    @Column({
        nullable: true,
    })
    password: string;

    @Column({
        nullable: true,
    })
    phone: string;

    @Column("json")
    roles: Role[];

    @Column()
    lastLoginAt: Date;
}
