import { Index, PrimaryGeneratedColumn } from "../../../../src";
import { BaseEntity, Column } from "../../../../src";
import { Entity } from "../../../../src";

@Index("name_index", ["name"])
@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
