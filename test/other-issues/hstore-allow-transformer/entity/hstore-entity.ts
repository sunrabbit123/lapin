import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { testTransformer } from "../test-transformer";

@Entity()
export class DummyHSTOREEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "hstore", transformer: testTransformer })
    translation: object;
}
