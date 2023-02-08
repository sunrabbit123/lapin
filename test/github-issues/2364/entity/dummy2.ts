import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column, PrimaryColumn } from "../../../../src";

@Entity()
export class Dummy2 {
    @PrimaryColumn({
        generated: true,
        nullable: false,
        primary: true,
    })
    id: number;

    @Column({ default: "name" })
    name: string;
}
