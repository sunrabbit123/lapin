import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class AccessToken extends BaseEntity {
    @PrimaryColumn()
    access_token: string;
}
