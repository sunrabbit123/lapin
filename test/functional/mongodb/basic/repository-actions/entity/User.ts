import { Column } from "../../../../../../src/decorator/columns/Column";
import { Entity } from "../../../../../../src/decorator/entity/Entity";

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string;
}
