import { BaseEntity, Entity, PrimaryColumn } from "../../../../src";

@Entity("UsersObject")
export class UsersObject extends BaseEntity {
    @PrimaryColumn({ type: "int" })
    id!: number;
}
