import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Category } from "./Category";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Category, (category) => category.posts, {
        cascade: ["insert"],
    })
    category: Promise<Category>;
}
