import { Generated } from "../../../../src";
import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { User } from "./User";

@Entity()
export class AccessToken extends BaseEntity {
    @PrimaryColumn()
    @Generated()
    primaryKey: number;

    @Column()
    expireTime: number;

    @OneToOne((type) => User, (user) => user.access_token, {
        cascade: true,
    })
    user: User;
}
