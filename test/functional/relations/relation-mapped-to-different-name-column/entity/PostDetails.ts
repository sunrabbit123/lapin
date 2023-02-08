import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";

@Entity()
export class PostDetails extends BaseEntity {
    @PrimaryColumn()
    keyword: string;
}
