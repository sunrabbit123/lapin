import { Column, PrimaryGeneratedColumn, Entity } from "../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    name2: string;
}
