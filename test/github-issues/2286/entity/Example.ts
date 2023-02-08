import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Example extends BaseEntity {
    @PrimaryColumn()
    id: Date;

    @Column()
    text: string;
}
