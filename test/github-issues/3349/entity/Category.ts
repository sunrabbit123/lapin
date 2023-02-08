import { PrimaryColumn } from "../../../../src";
import { BaseEntity, Column } from "../../../../src";
import { Entity } from "../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    public id!: number;

    @Column()
    public myField!: number;
}
