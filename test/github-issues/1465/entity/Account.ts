import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";
import { AccountActivationToken } from "./AccountActivationToken";
import { OneToOne } from "../../../../src";

@Entity()
export class Account extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @OneToOne((type) => AccountActivationToken, "account", {
        cascade: ["insert", "remove"],
    })
    accountActivationToken: AccountActivationToken;

    @Column() username: string;

    @Column() password: string;
}
