import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    inserted: boolean = false;
    updated: boolean = false;
}
