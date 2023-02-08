import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { TreeParent } from "../../../../src/decorator/tree/TreeParent";
import { TreeChildren } from "../../../../src/decorator/tree/TreeChildren";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Tree } from "../../../../src/decorator/tree/Tree";

@Entity()
@Tree("closure-table", {
    closureTableName: "category_xyz_closure",
    ancestorColumnName: (column) => "ancestor_xyz_" + column.propertyName,
    descendantColumnName: (column) => "descendant_xyz_" + column.propertyName,
})
export class Category {
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
