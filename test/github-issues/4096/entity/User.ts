import { Entity, PrimaryColumn, Column, BaseEntity } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    email: string;

    @PrimaryColumn()
    username: string;

    @Column()
    bio: string;
}
