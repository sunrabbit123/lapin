import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "varchar", array: true })
    roles: string[];
}
