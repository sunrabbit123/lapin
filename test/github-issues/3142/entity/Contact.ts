import { BaseEntity, Column } from "../../../../src";

export class Contact extends BaseEntity {
    @Column({ unique: true })
    email: string;
}
