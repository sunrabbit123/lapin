import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Student } from "./Student";

@Entity()
export class Teacher extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => Student, (student) => student.teacher)
    students: Student[];
}
