import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { TableInheritance } from "../../../../../../../src/decorator/entity/TableInheritance";
import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
@TableInheritance({ column: { name: "type", type: String } })
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
