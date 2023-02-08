import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";
import { RecordData } from "./RecordData";
import { RecordConfig } from "./RecordConfig";

@Entity()
export class Record extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "json" })
    configs: RecordConfig[];

    @Column({ type: "jsonb" })
    datas: RecordData[];
}
