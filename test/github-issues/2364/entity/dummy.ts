import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class Dummy extends BaseEntity {
    @Column({
        generated: true,
        nullable: false,
        primary: true,
    })
    id: number;

    @Column({ default: "name" })
    name: string;
}
