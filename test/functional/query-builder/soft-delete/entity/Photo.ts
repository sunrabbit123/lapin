import { Entity } from "../../../../../src/decorator/entity/Entity";
import { DeleteDateColumn } from "../../../../../src/decorator/columns/DeleteDateColumn";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Counters } from "./Counters";

@Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column((type) => Counters)
    counters: Counters;

    @DeleteDateColumn()
    deletedAt: Date;
}
