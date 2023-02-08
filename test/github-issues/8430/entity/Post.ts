import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
@Entity({ withoutRowid: true })
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}
