import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Index } from "../../../../src/decorator/Index";

@Entity()
export class Foo extends BaseEntity {
    @Column("date")
    @Index({ expireAfterSeconds: 0 })
    expireAt: Date;
}
