import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
} from "../../../../src";

@Entity({ name: "POST" })
export class Post extends BaseEntity{
    @PrimaryColumn()
    id: number;

    @Column({ nullable: true })
    title?: string;

    @Column({ name: "named_column", nullable: true })
    namedColumn?: string;
}
