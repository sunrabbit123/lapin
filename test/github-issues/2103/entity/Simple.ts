import { Entity, Column, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Simple extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    x: number;
}
