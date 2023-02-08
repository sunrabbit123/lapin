import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

@Entity({ synchronize: false })
export class Album {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}
