import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../../../src/decorator/columns/PrimaryColumn";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @PrimaryColumn()
    name: string;
}
