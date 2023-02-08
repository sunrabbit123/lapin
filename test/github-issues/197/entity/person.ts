import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Index } from "../../../../src/decorator/Index";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Person extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Index({
        unique: true,
    })
    @Column()
    firstname: string;

    @Column()
    lastname: string;
}
