import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Tournament extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 200 })
    name: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;
}
