import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Category } from "./Category";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { PostMetadata } from "./PostMetadata";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToOne((type) => Category, { cascade: true })
    @JoinColumn()
    category: Category | null;

    @OneToOne((type) => PostMetadata, (metadata) => metadata.post, {
        cascade: true,
    })
    @JoinColumn()
    metadata: PostMetadata | null;
}
