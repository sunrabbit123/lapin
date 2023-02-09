import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { ManyToMany } from "../../../../../../../src/decorator/relations/ManyToMany";
import { Student } from "./Student";

@Entity()
export class Faculty extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Student, (student) => student.faculties)
    students: Student[];
}
