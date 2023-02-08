import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn({ unsigned: true })
    id: number;

    @Column({ zerofill: true })
    num: number;
}
