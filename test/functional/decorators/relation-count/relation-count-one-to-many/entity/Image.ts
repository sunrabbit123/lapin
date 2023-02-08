import { PrimaryColumn } from "../../../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { ManyToOne } from "../../../../../../src/decorator/relations/ManyToOne";
import { Category } from "./Category";

@Entity()
export class Image extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    isRemoved: boolean = false;

    @ManyToOne((type) => Category, (category) => category.images)
    category: Category;
}
