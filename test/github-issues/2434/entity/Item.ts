import { CreateDateColumn, Column } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
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
