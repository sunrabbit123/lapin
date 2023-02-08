import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src";

@Entity("bar", { schema: "foo" })
export class Bar {
    @PrimaryGeneratedColumn()
    id: string;
}
