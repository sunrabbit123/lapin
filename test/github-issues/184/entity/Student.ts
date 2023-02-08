import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Person, PersonType } from "./Person";
import { ChildEntity } from "../../../../src/decorator/entity/ChildEntity";

@ChildEntity(PersonType.Student) // required
export class Student extends Person {
    @Column()
    faculty: string;

    constructor() {
        super();
        this.type = 3;
    }
}
