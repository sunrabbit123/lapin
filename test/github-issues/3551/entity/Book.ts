import { Entity, ObjectIdColumn, Column, ObjectID } from "../../../../src";

export class Page {
    @Column()
    number: number;
}

export class Chapter {
    @Column()
    title: string;

    @Column((type) => Page)
    pages: Page[];
}

@Entity()
export class Book extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column((type) => Chapter)
    chapters: Chapter[];
}
