import { BaseEntity, Entity, PrimaryColumn } from "../../../../../src";

@Entity("tests")
export class Test extends BaseEntity {
    @PrimaryColumn()
    varcharField: string;

    @PrimaryColumn("uuid")
    uuidField: string;

    @PrimaryColumn()
    intField: number;
}
