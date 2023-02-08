import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany((type) => Category)
    @JoinTable()
    categories: Category[];
}
