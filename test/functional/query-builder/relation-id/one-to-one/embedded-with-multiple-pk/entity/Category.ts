import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../../../src/decorator/columns/PrimaryColumn";

@Entity()
export class Category extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @PrimaryColumn()
    name: string;
}
