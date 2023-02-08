import { BaseEntity, Column } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src";
import { Entity } from "../../../../src";
import { ManyToMany } from "../../../../src";
import { Note } from "./Note";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @ManyToMany((type) => Note, (note) => note.categories)
    notes: Note[];
}
