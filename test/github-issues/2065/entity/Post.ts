import { Entity, PrimaryColumn, Column } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}
