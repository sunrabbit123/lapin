import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Category } from "./Category";
import { OneToMany } from "../../../../../src/decorator/relations/OneToMany";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Category, (category) => category.product, {
        cascade: true,
    })
    categories: Category[];
}
