import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn, Column, BaseEntity } from "../../../../src";
import { URL } from "url";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({
        type: String,
        // marshall
        transformer: {
            from(value: string): URL {
                return new URL(value);
            },
            to(value: URL): string {
                return value.toString();
            },
        },
    })
    url: URL;
}
