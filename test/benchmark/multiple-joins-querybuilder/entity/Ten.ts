import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { One } from "./One";
import { ManyToOne } from "../../../../src";

@Entity()
export class Ten extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => One)
    one: One;

    @Column({ type: "text" })
    aaaaa: string;

    @Column({ type: "text" })
    bbbbb: string;

    @Column({ type: "text" })
    ccccc: string;

    @Column({ type: "text" })
    ddddd: string;

    @Column({ type: "text" })
    eeeee: string;

    @Column({ type: "text" })
    fffff: string;

    @Column({ type: "text" })
    ggggg: string;

    @Column({ type: "text" })
    hhhhh: string;
}
