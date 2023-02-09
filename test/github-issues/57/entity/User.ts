import { AccessToken } from "./AccessToken";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
import { Generated } from "../../../../src/decorator/Generated";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    @Generated()
    primaryKey: number;

    @Column()
    email: string;

    @OneToOne((type) => AccessToken, (token) => token.user)
    @JoinColumn()
    access_token: AccessToken;
}
