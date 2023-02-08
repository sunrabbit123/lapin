import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";
import { AccountActivationToken } from "./AccountActivationToken";
import { OneToOne } from "../../../../src/index";

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
