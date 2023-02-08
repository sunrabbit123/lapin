import { BaseEntity, Entity, PrimaryColumn } from "../../../../src";

@Entity("User")
export class User extends BaseEntity {
    @PrimaryColumn({ type: "varbinary", length: 16 })
    id!: Buffer;
}
