import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { Entity } from "../../../../../../src/decorator/entity/Entity";

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string;
}
