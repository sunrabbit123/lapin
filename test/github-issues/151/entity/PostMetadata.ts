import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { Post } from "./Post";

@Entity()
export class PostMetadata extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne((type) => Post, (post) => post.metadata)
    post: Post | null;
}
