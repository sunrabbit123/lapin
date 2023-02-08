import { TreeParent } from "../../../../src/decorator/tree/TreeParent";
import { TreeChildren } from "../../../../src/decorator/tree/TreeChildren";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Tree } from "../../../../src/decorator/tree/Tree";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";

@Entity({ name: "categories" })
@Tree("materialized-path")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        name: "uid",
        unique: true,
    })
    uid: string;

    @Column()
    name: string;

    @Column({
        type: "varchar",
        name: "parentUid",
        nullable: true,
    })
    parentUid?: string | null;

    @TreeParent()
    @JoinColumn({
        name: "parentUid",
        referencedColumnName: "uid",
    })
    parentCategory?: Category | null;

    @TreeChildren({ cascade: true })
    childCategories: Category[];
}
