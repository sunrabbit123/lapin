import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    constructor(id?: number, title?: string) {
        super();
        if (id) this.id = id;
        if (title) this.title = title;
    }
}
