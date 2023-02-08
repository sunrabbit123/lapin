import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Index } from "../../../../src/decorator/Index";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    username: string;
}
