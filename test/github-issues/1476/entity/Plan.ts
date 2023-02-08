import { Entity, PrimaryColumn, Column } from "../../../../src/index";

@Entity()
export class Plan extends BaseEntity {
    @PrimaryColumn()
    planId: number;

    @Column()
    planName: string;
}
