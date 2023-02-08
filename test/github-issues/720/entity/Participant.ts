import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity("participants")
export class Participant {
    @PrimaryColumn()
    order_id: number;

    @PrimaryColumn()
    distance: string;

    @Column()
    price?: string;
}
