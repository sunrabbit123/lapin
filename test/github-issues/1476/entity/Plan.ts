import { BaseEntity, Entity, PrimaryColumn, Column } from "../../../../src";

@Entity()
export class Plan extends BaseEntity {
    @PrimaryColumn()
    planId: number;

    @Column()
    planName: string;
}
