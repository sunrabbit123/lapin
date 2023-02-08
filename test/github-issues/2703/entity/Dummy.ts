import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { WrappedString, wrappedStringTransformer } from "../wrapped-string";

@Entity()
export class Dummy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: String, transformer: wrappedStringTransformer })
    value: WrappedString;
}
