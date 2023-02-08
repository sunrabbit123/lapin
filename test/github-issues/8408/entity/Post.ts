import { Category } from "./Category";
import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { DeleteDateColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryId: string;

    @ManyToOne(() => Category, (category) => category.posts, {
        orphanedRowAction: "soft-delete",
    })
    @JoinColumn({ name: "categoryId" })
    category: Category;

    @DeleteDateColumn()
    deletedAt?: Date;
}
