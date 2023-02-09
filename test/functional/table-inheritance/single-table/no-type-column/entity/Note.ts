import * as Lapin from "../../../../../../src";
import { Person } from "./Person";

@Lapin.Entity()
@Lapin.TableInheritance({ column: { type: String, name: "type" } })
export class Note extends Lapin.BaseEntity {
    @Lapin.PrimaryGeneratedColumn()
    public id: number;

    @Lapin.Column({ default: null })
    public label?: string;

    @Lapin.ManyToOne(() => Person)
    public owner: Person;
}
