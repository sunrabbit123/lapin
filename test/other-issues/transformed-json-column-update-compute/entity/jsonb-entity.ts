import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    VersionColumn,
} from "../../../../src";
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
