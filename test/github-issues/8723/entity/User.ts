import { Column, Entity, PrimaryColumn } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn({ nullable: false })
    id: number;

    @Column()
    name: string;
}
