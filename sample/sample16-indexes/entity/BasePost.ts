import { BaseEntity, Column, PrimaryGeneratedColumn } from "../../../src";
import { Index } from "../../../src/decorator/Index";

@Index("my_index_with_id_and_text", ["id", "text"])
export class BasePost extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    text: string;

    @Index()
    @Column()
    extra: string;
}
