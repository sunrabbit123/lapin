import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class Username extends BaseEntity {
    @PrimaryColumn()
    username: string;

    @Column()
    email: string;

    @Column()
    something: string;
}
