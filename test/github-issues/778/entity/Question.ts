import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "smallint" })
    id: number;

    @Column()
    name: string;
}
