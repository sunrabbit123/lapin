import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";

@Entity()
export class PostWithoutTypes extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    bit: boolean;

    @Column()
    binary: Buffer;

    @Column()
    datetime: Date;
}
