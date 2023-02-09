import { PrimaryColumn, Entity, Column, BaseEntity } from "../../../../src";

@Entity()
export class MariadbEntity extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column("time")
    fieldTime: Date;

    @Column("timestamp")
    fieldTimestamp: Date;

    @Column("datetime")
    fieldDatetime: Date;
}
