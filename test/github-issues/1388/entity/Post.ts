import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp", nullable: true })
    createdAt: Date;
}
