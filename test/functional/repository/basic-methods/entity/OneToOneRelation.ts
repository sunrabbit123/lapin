import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../../../src";
import { Category } from "./Category";

@Entity()
export class OneToOneRelationEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;

    @Column()
    order: number;
}
