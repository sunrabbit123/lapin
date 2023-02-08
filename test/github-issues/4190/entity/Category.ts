import { Entity, PrimaryGeneratedColumn, Column } from "../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
