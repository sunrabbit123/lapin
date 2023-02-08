import { PrimaryColumn } from "../../../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({ unique: true })
    name: string;
}
