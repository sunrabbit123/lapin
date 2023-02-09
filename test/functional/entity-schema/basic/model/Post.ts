import { BaseEntity } from "../../../../../src";
import { Category } from "./Category";

export interface Post extends BaseEntity {
    id: number;
    title: string;
    text: string;
    categories: Category[];
}
