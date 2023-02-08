import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { PrimaryGeneratedColumn } from "../../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { JoinColumn } from "../../../../../../src/decorator/relations/JoinColumn";
import { OneToOne } from "../../../../../../src/decorator/relations/OneToOne";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @OneToOne((type) => Category, (category) => category.post)
    @JoinColumn()
    category: Category;

    @OneToOne((type) => Category, (category) => category.postWithOptions)
    @JoinColumn([
        { name: "category_name", referencedColumnName: "name" },
        { name: "category_type", referencedColumnName: "type" },
    ])
    categoryWithOptions: Category;

    @OneToOne((type) => Category, (category) => category.postWithNonPKColumns)
    @JoinColumn([
        { name: "category_code", referencedColumnName: "code" },
        { name: "category_version", referencedColumnName: "version" },
        { name: "category_description", referencedColumnName: "description" },
    ])
    categoryWithNonPKColumns: Category;
}
