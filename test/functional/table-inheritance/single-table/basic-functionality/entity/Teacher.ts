import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { ChildEntity } from "../../../../../../src/decorator/entity/ChildEntity";
import { Employee } from "./Employee";

@ChildEntity()
export class Teacher extends Employee {
    @Column()
    specialization: string;
}
