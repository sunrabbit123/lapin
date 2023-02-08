import { PrimaryGeneratedColumn, Entity, Column } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number | null;

    @Column()
    title: string;
}
