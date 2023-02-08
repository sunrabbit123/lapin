import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Post } from "./Post";
import { OneToMany } from "../../../../../../src/decorator/relations/OneToMany";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Post, (post) => post.category, {
        cascade: ["insert"],
        eager: true,
    })
    posts: Post[];
}
