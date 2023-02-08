import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "../../../../src";

@Entity("categories")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
