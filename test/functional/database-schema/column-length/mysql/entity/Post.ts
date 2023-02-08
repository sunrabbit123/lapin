import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column("char", {
        length: 50,
    })
    char: string;

    @Column("varchar", {
        length: 50,
    })
    varchar: string;
}
