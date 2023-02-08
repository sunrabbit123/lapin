import { Column, Entity, PrimaryGeneratedColumn } from "../../../../../src/";

@Entity()
export class Example extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number = 0;
}
