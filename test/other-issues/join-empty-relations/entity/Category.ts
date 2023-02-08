import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { Author } from "./Author";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany((type) => Author)
    @JoinTable()
    authors: Author[];
}
