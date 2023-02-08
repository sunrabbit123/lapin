import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity, OneToMany } from "../../../../../../../src";
import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Staff } from "./Staff";

@Entity()
export class Faculty extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Staff, (staff) => staff.faculty, {
        cascade: true,
        eager: true,
    })
    staff: Staff[];
}
