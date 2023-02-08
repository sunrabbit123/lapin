import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Faculty extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
