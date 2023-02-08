import { BaseEntity, Column, PrimaryGeneratedColumn } from "../../../src";

export class BasePost extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
