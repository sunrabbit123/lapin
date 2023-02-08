import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity({ name: "POST" })
export class Post {
    @PrimaryColumn()
    id: number;

    @Column({ nullable: true })
    title?: string;

    @Column({ name: "named_column", nullable: true })
    namedColumn?: string;
}
