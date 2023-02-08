import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../../src";
import { Index } from "../../../../../src/decorator/Index";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Index({ fulltext: true })
    @Column()
    default: string;

    @Index({ fulltext: true, parser: "ngram" })
    @Column()
    ngram: string;
}
