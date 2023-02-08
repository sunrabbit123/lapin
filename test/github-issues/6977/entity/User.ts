import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";
import { Embedded } from "./Embedded";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column(() => Embedded) embedded: Embedded;
}
