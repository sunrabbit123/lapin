import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column()
    name!: string;
}
