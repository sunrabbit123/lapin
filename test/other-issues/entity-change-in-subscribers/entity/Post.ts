import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { UpdateDateColumn } from "../../../../src/decorator/columns/UpdateDateColumn";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { PostCategory } from "./PostCategory";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { BaseEntity } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ default: false })
    active: boolean;

    @UpdateDateColumn()
    updateDate: Date;

    @OneToOne((type) => PostCategory)
    @JoinColumn()
    category: PostCategory;

    @Column()
    updatedColumns: number = 0;

    @Column()
    updatedRelations: number = 0;
}
