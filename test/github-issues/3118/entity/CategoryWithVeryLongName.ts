import { JoinTable, Entity, ManyToMany } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { PostWithVeryLongName } from "./PostWithVeryLongName";

@Entity()
export class CategoryWithVeryLongName extends BaseEntity {
    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column({ default: "dummy name" })
    name: string;

    @ManyToMany(() => PostWithVeryLongName, (post) => post.categories)
    @JoinTable()
    postsWithVeryLongName: PostWithVeryLongName[];
}
