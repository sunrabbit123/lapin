import * as Lapin from "../../../../../../src";
import { Note } from "./Note";
import { Author } from "./Author";

@Lapin.ChildEntity()
export class StickyNote extends Note {
    @Lapin.Column()
    public stickyNoteLabel: string;

    @Lapin.ManyToOne(() => Author, (author) => author.notes)
    public owner: Author;
}
