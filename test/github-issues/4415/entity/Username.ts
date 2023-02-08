import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity()
export class Username extends BaseEntity {
    @PrimaryColumn()
    username: string;

    @Column()
    email: string;

    @Column()
    something: string;
}
