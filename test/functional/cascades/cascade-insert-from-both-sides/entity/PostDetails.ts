import { Entity } from "../../../../../src/decorator/entity/Entity";
import { Post } from "./Post";
import { OneToOne } from "../../../../../src/decorator/relations/OneToOne";
import { BaseEntity, PrimaryColumn } from "../../../../../src";

@Entity()
export class PostDetails extends BaseEntity {
    @PrimaryColumn()
    keyword: string;

    @OneToOne((type) => Post, (post) => post.details, {
        cascade: ["insert"],
    })
    post: Post;
}
