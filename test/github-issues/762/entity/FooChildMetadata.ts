import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

export class FooChildMetadata extends BaseEntity {
    @Column({ nullable: true })
    something: number;

    @Column({ nullable: true })
    somethingElse: number;
}
