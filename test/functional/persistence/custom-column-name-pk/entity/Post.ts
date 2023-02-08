import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { ManyToOne } from "../../../../../src/decorator/relations/ManyToOne";
import { Category } from "./Category";
import { Generated } from "../../../../../src/decorator/Generated";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn({ name: "theId" })
    @Generated()
    id: number;

    @Column()
    title: string;

    @ManyToOne((type) => Category, (category) => category.posts, {
        cascade: ["insert"],
    })
    category: Category;
}
