import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Index } from "../../../../src/decorator/Index";
import { OneToOne } from "../../../../src/decorator/relations/OneToOne";
import { JoinColumn } from "../../../../src/decorator/relations/JoinColumn";
import { User } from "./User";

@Entity()
@Index("table_index_userId_mid", (post: Item) => [post.userId, post.mid])
export class Item {
    @PrimaryGeneratedColumn()
    postId: number;

    @OneToOne((type) => User, (users) => users.userId)
    @JoinColumn({ name: "userId" })
    userData: User;

    @Column()
    userId: number;

    @Column()
    mid: number;
}
