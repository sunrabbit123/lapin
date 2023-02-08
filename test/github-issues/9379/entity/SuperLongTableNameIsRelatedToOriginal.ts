import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    BaseEntity,
} from "../../../../src";
import { SuperLongTableName } from "./SuperLongTableName";

@Entity()
export class SuperLongTableNameWhichIsRelatedToOriginalTable extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    superLongTableNameId: number;

    @ManyToOne(() => SuperLongTableName, (table) => table.relatedToOriginal)
    @JoinColumn({ name: "superLongTableNameId" })
    superLongTableName: SuperLongTableName;
}
