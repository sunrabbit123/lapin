import * as Lapin from "../../../../../../src";
import { Note } from "./Note";

@Lapin.Entity({ name: "person" })
export class Person extends Lapin.BaseEntity {
    @Lapin.PrimaryGeneratedColumn()
    public id: number;

    @Lapin.Column()
    public name: string;

    @Lapin.OneToMany(() => Note, (note) => note.owner)
    public notes: Note[];
}
