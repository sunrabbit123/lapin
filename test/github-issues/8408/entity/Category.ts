import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Post } from "./Post";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";
import { DeleteDateColumn } from "../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Post, (post) => post.category, {
        cascade: true,
        eager: true,
    })
    posts: Post[];

    @DeleteDateColumn()
    deletedAt?: Date;
}
