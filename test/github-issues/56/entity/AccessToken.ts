import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity, Entity } from "../../../../src";
@Entity()
export class AccessToken extends BaseEntity {
    @PrimaryColumn()
    access_token: string;
}
