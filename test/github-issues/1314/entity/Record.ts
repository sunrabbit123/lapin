import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

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
