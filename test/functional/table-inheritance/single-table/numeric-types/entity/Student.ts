import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { ChildEntity } from "../../../../../../src/decorator/entity/ChildEntity";
import { Person } from "./Person";

@ChildEntity(0)
export class Student extends Person {
    @Column()
    faculty: string;
}
