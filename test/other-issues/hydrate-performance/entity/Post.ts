import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    constructor(title?: string) {
        if (title) this.title = title;
    }
}
