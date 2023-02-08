import { Entity, Column, PrimaryColumn } from "../../../../src";

@Entity()
export class Complex extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @PrimaryColumn()
    code: number;

    @Column()
    x: number;
}
