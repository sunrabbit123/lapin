import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { BaseEntity, VersionColumn } from "../../../../src";
import { testTransformer } from "../test-transformer";

@Entity()
export class DummyJSONBEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @VersionColumn()
    version: number;

    @Column({ type: "jsonb", transformer: testTransformer })
    value: Record<string, any>;
}
