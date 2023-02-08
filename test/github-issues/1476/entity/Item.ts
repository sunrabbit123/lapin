import { Entity, PrimaryColumn, Column } from "../../../../src/index";

@Entity()
export class Item extends BaseEntity {
    @PrimaryColumn()
    itemId: number;

    @Column()
    planId: number;
}
