import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
} from "../../../../src";

@Entity("participants")
export class Participant extends BaseEntity {
    @PrimaryColumn()
    order_id: number;

    @PrimaryColumn()
    distance: string;

    @Column()
    price?: string;
}
