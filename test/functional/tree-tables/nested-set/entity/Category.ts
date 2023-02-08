import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { TreeParent } from "../../../../../src/decorator/tree/TreeParent";
import { TreeChildren } from "../../../../../src/decorator/tree/TreeChildren";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Tree } from "../../../../../src/decorator/tree/Tree";
import { BaseEntity } from "../../../../../src";

@Entity()
@Tree("nested-set")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @TreeParent()
    parentCategory: Category;

    @TreeChildren({ cascade: true })
    childCategories: Category[];

    // @TreeLevelColumn()
    // level: number;
}
