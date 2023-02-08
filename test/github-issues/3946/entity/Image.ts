import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { Category } from "./Category";

@Entity()
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    isRemoved: boolean = false;

    @ManyToMany((type) => Category, (category) => category.images)
    categories: Category[];

    categoryCount: number;
}
