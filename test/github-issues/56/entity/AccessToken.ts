import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity()
export class AccessToken extends BaseEntity {
    @PrimaryColumn()
    access_token: string;
}
