import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../../src/decorator/entity/Entity";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
