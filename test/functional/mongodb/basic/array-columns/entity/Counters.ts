import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";

export class Counters extends BaseEntity {
    @Column()
    likes: number;

    @Column()
    text: string;

    constructor(likes: number, text: string) {
        super();
        this.likes = likes;
        this.text = text;
    }
}
