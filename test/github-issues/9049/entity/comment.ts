import { Value } from "./value";
import { BaseEntity, Column } from "../../../../src";

export class Comment extends BaseEntity {
    @Column(() => Value, { array: true })
    values: Value[];
}
