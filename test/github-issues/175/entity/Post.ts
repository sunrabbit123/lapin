import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Category } from "./Category";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany((type) => Category)
    @JoinTable()
    categories: Category[];

    @OneToMany((type) => Category, (category) => category.post)
    secondaryCategories: Category[];
}
