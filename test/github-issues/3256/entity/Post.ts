import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    inserted: boolean = false;
    updated: boolean = false;
}
