import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Generated } from "../../../../src/decorator/Generated";

@Entity("kollektion")
export class Kollektion extends BaseEntity {
    @PrimaryColumn({ name: "kollektion_id" })
    @Generated()
    id: number;

    @Column({ name: "kollektion_name" })
    name: string;
}
