import { Column, Entity, PrimaryColumn } from "../../../../src";

@Entity()
export class User {
    @PrimaryColumn({ nullable: false })
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    github: string;
}
