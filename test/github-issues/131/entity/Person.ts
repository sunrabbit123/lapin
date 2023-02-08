import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { TableInheritance } from "../../../../src/decorator/entity/TableInheritance";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

@Entity()
@TableInheritance({ column: { name: "type", type: String } })
export class Person {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}
