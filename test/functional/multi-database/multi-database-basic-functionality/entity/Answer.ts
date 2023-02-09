import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity({ database: "filename-sqlite.attach.db" })
export class Answer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
}
