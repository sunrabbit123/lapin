import { PrimaryColumn, Entity, Column } from "../../../../src";

@Entity()
export class MysqlEntity extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column("time")
    fieldTime: Date;

    @Column("timestamp")
    fieldTimestamp: Date;

    @Column("datetime")
    fieldDatetime: Date;
}
