import { Entity } from "../../../../../../../src/decorator/entity/Entity";
import { BaseEntity } from "../../../../../../../src";
import { Column } from "../../../../../../../src/decorator/columns/Column";
import { OneToOne } from "../../../../../../../src/decorator/relations/OneToOne";
import { Category } from "./Category";
import { PrimaryColumn } from "../../../../../../../src";

@Entity()
export class Image extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne((type) => Category, (category) => category.image)
    category: Category;

    categoryId: number;
}
