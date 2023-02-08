import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { Category } from "./Category";

export class Post {
    constructor() {
        this.category = new Category();
    }

    @Column((type) => Category)
    category: Category;

    @Column()
    postNumber: number;
}
