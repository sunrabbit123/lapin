import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Category } from "./Category";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(() => Category, (category) => category.post, {
        cascade: ["insert"],
    })
    categories: Category[];
}
