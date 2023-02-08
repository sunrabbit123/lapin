import { Entity, PrimaryGeneratedColumn } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class LetterBox extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "point", srid: 4326 })
    coord: string;
}
