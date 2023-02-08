import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src/index";
import { Category } from "./Category";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";

@Entity()
export class Animal extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Category)
    category: Category;
}
