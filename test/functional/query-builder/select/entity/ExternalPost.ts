import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../../src";

@Entity()
export class ExternalPost extends BaseEntity {
    @PrimaryColumn()
    outlet: string;

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;
}
