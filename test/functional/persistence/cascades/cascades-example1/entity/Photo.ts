import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../../src";

@Entity()
export class Photo extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({ default: "My photo" })
    name: string;
}
