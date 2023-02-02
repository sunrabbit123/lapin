import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { VersionColumn } from "../../../../src";
import { testTransformer } from "../test-transformer";

@Entity()
export class DummyJSONBEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @VersionColumn()
    version: number;

    @Column({ type: "jsonb", transformer: testTransformer })
    value: Record<string, any>;
}
