import { PrimaryGeneratedColumn, Entity, Column } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        type: "json",
    })
    meta: any;
}
