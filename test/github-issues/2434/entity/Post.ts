import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity({ name: "POST" })
export class Post {
    @PrimaryColumn()
    id: number;

    @Column({ nullable: true })
    title?: string;

    @Column({ name: "named_column", nullable: true })
    namedColumn?: string;
}
