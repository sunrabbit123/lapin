import * as Lapin from "../../../../../../src";
import { Person } from "./Person";

@Lapin.Entity({ name: "person" })
export class Author extends Person {
    @Lapin.Column({ default: null })
    public authorName: string;
}
