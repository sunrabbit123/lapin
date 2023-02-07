import * as Lapin from "../../../../../../src";
import { Note } from "./Note";
import { Employee } from "./Employee";

@Lapin.ChildEntity()
export class PostItNote extends Note {
    @Lapin.Column()
    public postItNoteLabel: string;

    @Lapin.ManyToOne(() => Employee, (person) => person.notes)
    public owner: Employee;
}
