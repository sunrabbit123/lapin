import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
