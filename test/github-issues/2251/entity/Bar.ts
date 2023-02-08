import { Column, ManyToOne, PrimaryGeneratedColumn } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Foo } from "./Foo";

@Entity()
export class Bar extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() description: string;

    @ManyToOne((type) => Foo, (foo) => foo.bars)
    foo?: Foo;
}
