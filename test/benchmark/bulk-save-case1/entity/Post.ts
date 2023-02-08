import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: "text" })
    text: string;

    @Column({ type: "int" })
    likesCount: number;

    @Column({ type: "int" })
    commentsCount: number;

    @Column({ type: "int" })
    watchesCount: number;
}
