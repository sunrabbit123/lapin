import { BaseEntity, Entity, PrimaryColumn } from "../../../../src";

export class MyId {
    first: number;
    second: number;
}

@Entity({ name: "jsonb_key_tests" })
export class JSONBKeyTest extends BaseEntity {
    @PrimaryColumn("jsonb")
    id: MyId;
}
