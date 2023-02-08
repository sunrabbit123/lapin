import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { BaseEntity } from "../../../../../src";
import { Category } from "./Category";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { ManyToMany } from "../../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../../src/decorator/relations/JoinTable";
import { Counters } from "./Counters";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column((type) => Counters)
    counters: Counters;

    @ManyToMany((type) => Category, (category) => category.posts, {
        cascade: ["update"],
    })
    @JoinTable()
    categories: Category[];
}
