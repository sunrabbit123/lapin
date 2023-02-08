import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { ManyToOne } from "../../../../../../../src/decorator/relations/ManyToOne";
import { Teacher } from "./Teacher";

@Entity()
export class Specialization extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Teacher, (teacher) => teacher.specializations)
    teacher: Teacher;
}
