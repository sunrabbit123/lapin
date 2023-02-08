import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";
import { PostCategory } from "./PostCategory";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((type) => PostCategory, (postCategory) => postCategory.category)
    posts: PostCategory[];
}
