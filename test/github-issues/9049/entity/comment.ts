import { Value } from "./value";
import { BaseEntity, Column } from "../../../../src";

export class Comment {
    @Column(() => Value, { array: true })
    values: Value[];
}
