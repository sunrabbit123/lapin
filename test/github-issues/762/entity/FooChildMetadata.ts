import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

export class FooChildMetadata {
    @Column({ nullable: true })
    something: number;

    @Column({ nullable: true })
    somethingElse: number;
}
