import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

export class Unit {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    type: string;
}
