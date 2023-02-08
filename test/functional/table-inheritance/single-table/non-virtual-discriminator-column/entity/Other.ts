import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { ChildEntity } from "../../../../../../src/decorator/entity/ChildEntity";
import { Person } from "./Person";

@ChildEntity("")
export class Other extends Person {
    @Column()
    mood: string;
}
