import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { WrappedString, wrappedStringTransformer } from "../wrapped-string";

@Entity()
export class Dummy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String, transformer: wrappedStringTransformer })
    value: WrappedString;
}
