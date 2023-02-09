import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

export class Duration extends BaseEntity {
    @Column({ type: Number, nullable: true })
    minutes: number | null;

    @Column({ type: Number, nullable: true })
    hours: number | null;

    @Column({ type: Number, nullable: true })
    days: number | null;
}
