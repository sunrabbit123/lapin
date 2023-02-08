import { Entity, PrimaryColumn, Column } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn({
        comment: "The ID of this user.",
        length: 16,
        type: "binary",
    })
    id: Buffer;

    @Column()
    name: string;
}
