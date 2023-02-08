import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { Kollektion } from "./Kollektion";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { Generated } from "../../../../src/decorator/Generated";

@Entity("artikel")
export class Artikel extends BaseEntity {
    @PrimaryColumn({ name: "artikel_id" })
    @Generated()
    id: number;

    @Column({ name: "artikel_nummer" })
    nummer: string;

    @Column({ name: "artikel_name" })
    name: string;

    @Column({ name: "artikel_extrabarcode" })
    extrabarcode: string;

    @Column({ name: "artikel_saison" })
    saison: string;

    @ManyToOne((type) => Kollektion, { cascade: true })
    @JoinColumn({ name: "id_kollektion" })
    kollektion: Kollektion;
}
