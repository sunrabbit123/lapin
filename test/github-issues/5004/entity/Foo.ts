import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Entity } from "../../../../src/decorator/entity/Entity";
import { Index } from "../../../../src/decorator/Index";

@Entity()
export class Foo extends BaseEntity {
    @Column("date")
    @Index({ expireAfterSeconds: 0 })
    expireAt: Date;
}
