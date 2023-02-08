import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

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
