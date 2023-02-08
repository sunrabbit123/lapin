import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class ActionDetails extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}
