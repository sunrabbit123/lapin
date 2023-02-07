import * as Lapin from "../../../../../../src";
import { Person } from "./Person";

@Lapin.Entity({ name: "person" })
export class Employee extends Person {
    @Lapin.Column({ default: null })
    public employeeName: string;
}
