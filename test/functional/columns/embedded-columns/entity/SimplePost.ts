import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { SimpleCounters } from "./SimpleCounters";

@Entity()
export class SimplePost extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column((type) => SimpleCounters)
    counters: SimpleCounters;
}
