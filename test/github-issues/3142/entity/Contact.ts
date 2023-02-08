import { BaseEntity, Column } from "../../../../src";

export class Contact {
    @Column({ unique: true })
    email: string;
}
