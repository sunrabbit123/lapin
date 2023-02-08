import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Category } from "./Category";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";

@Entity()
export class Animal extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Category)
    @JoinTable()
    categories: Category[];
}
