import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

export class PersonalInfo {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    address: string;
}

export class UserInfo extends PersonalInfo {
    @Column()
    userName: string;
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column((type) => UserInfo)
    info: UserInfo;
}
