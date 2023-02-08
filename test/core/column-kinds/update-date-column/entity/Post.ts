import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "../../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @UpdateDateColumn()
    updatedAt: Date;
}
