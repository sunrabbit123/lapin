import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Author } from "./Author";
import { ManyToMany } from "../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../src/decorator/relations/JoinTable";

@Entity("sample23_category")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Author)
    @JoinTable()
    author: Author;
}
