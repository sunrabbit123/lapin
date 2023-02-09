import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Unit extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    type: string;
}
