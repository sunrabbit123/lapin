import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";
import { Counters } from "./Counters";

@Entity("sample26_question")
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column((type) => Counters)
    counters: Counters;
}
