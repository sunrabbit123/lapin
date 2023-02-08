import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;
}
