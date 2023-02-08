import { Entity, Column, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;
}
