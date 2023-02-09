import { PrimaryGeneratedColumn } from "../../../../src";
import { BaseEntity, Column } from "../../../../src";
import { TreeParent } from "../../../../src";
import { TreeChildren } from "../../../../src";
import { Entity } from "../../../../src";
import { Tree } from "../../../../src";

@Entity()
@Tree("closure-table")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @TreeParent()
    parentCategory: Category;

    @TreeChildren({ cascade: true })
    childCategories: Category[];
}
