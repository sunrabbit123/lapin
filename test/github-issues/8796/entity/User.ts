import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
@Entity()
export class User extends BaseEntity {
    @PrimaryColumn({ nullable: false })
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    github: string;
}
