import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src/repository/BaseEntity";

@Entity()
export class Foo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
