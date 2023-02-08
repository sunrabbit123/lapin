import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";

@Entity("sample19_post_metadata")
export class PostMetadata extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    comment: string;
}
