import { Column, Entity, PrimaryGeneratedColumn } from "../../../../../src";

@Entity()
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    balance: number;
}
