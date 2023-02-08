import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

export class BaseContent extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
