import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { ManyToMany } from "../../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../../src/decorator/relations/JoinTable";
import { Category } from "./Category";

@Entity({
    database: "yoman",
})
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Category)
    @JoinTable({ database: "yoman" })
    categories: Category[];
}
