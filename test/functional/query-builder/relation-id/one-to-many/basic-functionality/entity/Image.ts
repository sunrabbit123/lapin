import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { PrimaryGeneratedColumn } from "../../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { ManyToOne } from "../../../../../../../src/decorator/relations/ManyToOne";
import { Category } from "./Category";

@Entity()
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Category, (category) => category.images)
    category: Category;

    categoryId: number;
}
