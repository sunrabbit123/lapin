import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { Group } from "./Group";

@Entity()
export class Player extends BaseEntity {
    @PrimaryColumn()
    email: string;

    @ManyToOne((type) => Group)
    group: Group;
}
