import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
@Entity()
export class Username extends BaseEntity {
    @PrimaryColumn()
    username: string;

    @Column()
    email: string;

    @Column()
    something: string;
}
