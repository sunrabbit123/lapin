import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Author } from "./Author";
import { Category } from "./Category";
import { ManyToMany } from "../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../src/decorator/relations/JoinTable";

@Entity("sample20_post")
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column("int")
    authorId: number;

    @ManyToMany((type) => Category)
    @JoinTable()
    categories: Category[];

    superCategories: Category[];

    author: Author;
}
