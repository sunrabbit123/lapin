import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Category } from "./Category";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Category, (category) => category.posts, {
        cascade: ["insert"],
    })
    categories: Category[];
}
