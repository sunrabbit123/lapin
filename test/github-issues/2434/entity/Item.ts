import { CreateDateColumn, Column } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
@Entity("ITEM")
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    itemName: string;

    @Column({ nullable: true })
    itemDescription?: string;
}
