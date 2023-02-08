import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: string;

    @Column()
    name: string;
}
