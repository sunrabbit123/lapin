import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Index } from "../../../../src/decorator/Index";

@Index("Groups name", ["name"], { unique: true })
@Entity("groups")
export class Group extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}
