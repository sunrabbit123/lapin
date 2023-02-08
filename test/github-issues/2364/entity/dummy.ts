import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
@Entity()
export class Dummy extends BaseEntity {
    @Column({
        generated: true,
        nullable: false,
        primary: true,
    })
    id: number;

    @Column({ default: "name" })
    name: string;
}
