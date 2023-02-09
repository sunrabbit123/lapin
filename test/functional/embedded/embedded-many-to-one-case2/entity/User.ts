import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";
import { PrimaryColumn } from "../../../../../src/decorator/columns/PrimaryColumn";
import { Entity } from "../../../../../src/decorator/entity/Entity";
import { ManyToOne } from "../../../../../src/decorator/relations/ManyToOne";
import { JoinColumn } from "../../../../../src/decorator/relations/JoinColumn";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne((type) => Post)
    @JoinColumn()
    likedPost: Post;
}
