import { AccessToken } from "./AccessToken";
import { OneToOne } from "../../../../../src/decorator/relations/OneToOne";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Generated } from "../../../../../src/decorator/Generated";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    @Generated()
    primaryKey: number;

    @Column()
    email: string;

    @OneToOne((type) => AccessToken, (token) => token.user)
    access_token: AccessToken;
}
