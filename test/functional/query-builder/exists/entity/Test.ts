import { BaseEntity, Entity, PrimaryColumn } from "../../../../../src";

@Entity("tests")
export class Test extends BaseEntity {
    @PrimaryColumn()
    id: string;
}
