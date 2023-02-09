import {
    Entity,
    ObjectIdColumn,
    Column,
    ObjectID,
    BaseEntity,
} from "../../../../src";

export class Page extends BaseEntity {
    @Column()
    number: number;
}

export class Chapter extends BaseEntity {
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
