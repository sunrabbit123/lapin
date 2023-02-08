import { AccessToken } from "./AccessToken";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Generated } from "../../../../src/decorator/Generated";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn("int")
    @Generated()
    id: number;

    @Column()
    email: string;

    @OneToOne((type) => AccessToken)
    @JoinColumn()
    access_token: AccessToken;
}
