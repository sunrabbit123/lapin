import { Entity, PrimaryGeneratedColumn, Column } from "../../../../src";

@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    photo: string;
}
