import { Column } from "../../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../../src";
import { Category } from "./Category";
import { Subcounters } from "./Subcounters";
import { OneToMany } from "../../../../../../../src/decorator/relations/OneToMany";

export class Counters extends BaseEntity {
    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;

    @OneToMany((type) => Category, (category) => category.posts)
    categories: Category[];

    @Column(() => Subcounters, { prefix: "sub" })
    subcounters: Subcounters;

    categoryIds: number[];
}
