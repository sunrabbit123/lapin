import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../../../src/decorator/columns/Column";
import { OneToMany } from "../../../../../../../src/decorator/relations/OneToMany";
import { PostCategory } from "./PostCategory";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany((type) => PostCategory, (postCategory) => postCategory.category)
    posts: PostCategory[];
}
