import { Entity, PrimaryGeneratedColumn } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Dummy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    field: string;
}
