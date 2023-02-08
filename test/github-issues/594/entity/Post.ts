import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src/index";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    postId: number;

    @Column()
    modelId: number;
}
