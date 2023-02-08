import { Entity, PrimaryColumn, Column } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    name: string;

    @PrimaryColumn()
    email: string;

    @Column()
    age: number;
}
