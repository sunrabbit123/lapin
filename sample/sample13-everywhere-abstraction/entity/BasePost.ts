import { BaseEntity, Column, PrimaryGeneratedColumn } from "../../../src/index";

export class BasePost extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    title2312312: string;
}
