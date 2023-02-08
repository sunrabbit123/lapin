import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Group } from "./Group";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {
    constructor() {
        this.group = new Group();
        this.post = new Post();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column((type) => Group)
    group: Group;

    @Column((type) => Post)
    post: Post;

    @Column()
    userProperty: number;
}
