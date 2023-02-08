import { BaseEntity, Entity, PrimaryColumn, Column } from "../../../../src";

@Entity()
export class Item extends BaseEntity {
    @PrimaryColumn()
    itemId: number;

    @Column()
    planId: number;
}
