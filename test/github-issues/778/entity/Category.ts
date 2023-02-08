import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: string;

    @Column()
    name: string;
}
