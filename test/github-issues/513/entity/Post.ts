import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn("int")
    id: number;

    @Column({ type: "datetime", nullable: true })
    dateTimeColumn: Date;

    @Column({ type: "time", nullable: true })
    timeColumn: Date;
}
