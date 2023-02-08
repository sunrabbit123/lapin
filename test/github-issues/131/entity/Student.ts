import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Person } from "./Person";
import { ChildEntity } from "../../../../src/decorator/entity/ChildEntity";

@ChildEntity()
export class Student extends Person {
    @Column()
    faculty: string;
}
