import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Category } from "./Category";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany((type) => Category, {
        cascade: ["insert"],
    })
    @JoinTable()
    categories: Category[];
}
