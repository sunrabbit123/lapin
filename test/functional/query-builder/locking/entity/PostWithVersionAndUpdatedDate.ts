import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { VersionColumn } from "../../../../../src/decorator/columns/VersionColumn";
import { UpdateDateColumn } from "../../../../../src/decorator/columns/UpdateDateColumn";

@Entity("post_with_v_ud")
export class PostWithVersionAndUpdatedDate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @VersionColumn()
    version: number;

    @UpdateDateColumn()
    updateDate: Date;
}
