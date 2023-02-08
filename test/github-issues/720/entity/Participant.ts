import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity("participants")
export class Participant extends BaseEntity {
    @PrimaryColumn()
    order_id: number;

    @PrimaryColumn()
    distance: string;

    @Column()
    price?: string;
}
