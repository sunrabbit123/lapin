import { TableInheritance } from "../../../../src/decorator/entity/TableInheritance";
import { BaseEntity, Column, Entity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

@Entity()
@TableInheritance({ column: { name: "type", type: String } })
export class Person extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}
