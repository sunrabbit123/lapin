import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn("double precision")
    id: number;

    @Column()
    title: string;
}
