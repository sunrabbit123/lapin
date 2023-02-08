import { Column } from "../../../src";

export class Counters {
    @Column()
    raiting: number;

    @Column()
    stars: number;

    @Column()
    commentCount: number;

    @Column()
    metadata: string;
}
