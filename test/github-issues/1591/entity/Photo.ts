import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Photo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: Date;
}
