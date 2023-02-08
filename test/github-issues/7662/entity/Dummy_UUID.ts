import { Entity } from "../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Dummy extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
