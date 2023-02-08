import { TableInheritance } from "../../../../src/decorator/entity/TableInheritance";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Token extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column() tokenSecret: string;

    @Column() expiresOn: Date;
}
