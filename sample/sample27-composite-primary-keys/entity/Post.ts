import { BaseEntity, Column, Entity } from "../../../src";
import { PrimaryColumn } from "../../../src/decorator/columns/PrimaryColumn";

@Entity("sample27_composite_primary_keys")
export class Post extends BaseEntity {
    @PrimaryColumn("int")
    id: number;

    @PrimaryColumn()
    type: string;

    @Column()
    text: string;
}
