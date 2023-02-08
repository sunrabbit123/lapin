import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { BaseEntity } from "../../../../src/repository/BaseEntity";

@Entity()
export class Foo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
