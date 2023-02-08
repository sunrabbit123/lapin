import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Flight extends BaseEntity {
    constructor(id: number, date: Date) {
        this.id = id;
        this.date = date;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp with time zone")
    date: Date;
}
