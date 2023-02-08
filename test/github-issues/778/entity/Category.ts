import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: string;

    @Column()
    name: string;
}
