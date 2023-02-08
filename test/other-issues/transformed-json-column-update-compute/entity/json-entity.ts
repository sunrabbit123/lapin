import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    VersionColumn,
} from "../../../../src";
import { testTransformer } from "../test-transformer";

@Entity()
export class DummyJSONEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @VersionColumn()
    version: number;

    @Column({ type: "json", transformer: testTransformer })
    value: Record<string, any>;
}
