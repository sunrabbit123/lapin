import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Counters } from "./Counters";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column(() => Counters)
    counters: Counters;
}
