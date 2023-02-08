import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
@Entity()
export class Document extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({ nullable: true, select: false })
    name: string;

    @Column({ insert: false, select: false, nullable: true })
    permission: number;

    @Column({ insert: false, default: 1 })
    version: number;
}
