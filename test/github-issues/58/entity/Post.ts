import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";
import { PostCategory } from "./PostCategory";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToMany(
        (type) => PostCategory,
        (postCategoryRelation) => postCategoryRelation.post,
    )
    categories: PostCategory[];
}
