import { Column, Entity, ManyToOne, PrimaryColumn } from "../../../../../src";
import { Author } from "./Author";

@Entity()
export class Photo extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    description: string;

    @ManyToOne(() => Author, (author) => author.photos)
    author: Author;
}
