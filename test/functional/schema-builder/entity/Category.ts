import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    postText: string;

    @Column()
    postTag: string;
}
