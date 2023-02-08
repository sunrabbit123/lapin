import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src/index";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
