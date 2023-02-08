import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "category_id" })
    categoryId: number;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;
}
