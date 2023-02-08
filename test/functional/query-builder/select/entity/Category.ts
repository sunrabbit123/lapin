import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { VersionColumn } from "../../../../../src/decorator/columns/VersionColumn";
import { Post } from "./Post";
import { OneToMany } from "../../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @VersionColumn()
    version: string;

    @OneToMany(() => Post, (post) => post.category)
    posts: Post[];
}
