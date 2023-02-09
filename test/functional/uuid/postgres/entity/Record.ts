import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { BaseEntity } from "../../../../../src";

@Entity()
export class Record extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
