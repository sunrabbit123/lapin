import {
    BaseEntity,
    Column,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";

import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Foo } from "./Foo";

@Entity()
export class Bar extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() description: string;

    @ManyToMany((type) => Foo, (foo) => foo.bars)
    foos?: Foo[];
}
