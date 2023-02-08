import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

/**
 * For testing Postgres jsonb
 */
@Entity()
export class Record extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "json", nullable: true })
    config: any;

    @Column({ type: "jsonb", nullable: true })
    data: any;
}
