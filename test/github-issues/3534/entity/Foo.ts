import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { RegExpStringTransformer } from "./RegExpStringTransformer";
import { PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Foo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String, transformer: RegExpStringTransformer })
    bar: RegExp;
}
