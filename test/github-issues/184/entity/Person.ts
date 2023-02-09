import { TableInheritance } from "../../../../src/decorator/entity/TableInheritance";
import { BaseEntity, Column, Entity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

export enum PersonType {
    Employee = 1,
    Homesitter = 2,
    Student = 3,
}

@Entity("issue184_person")
@TableInheritance({ column: { name: "type", type: "int" } })
export abstract class Person extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    type: PersonType;
}
