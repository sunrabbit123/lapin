import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { Index } from "../../../../../../src/decorator/Index";

export class Information {
    @Column()
    description: string;

    @Column()
    @Index("post_likes")
    likes: number;
}
