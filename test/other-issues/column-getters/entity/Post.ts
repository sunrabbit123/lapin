import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "title" })
    private _title: string;

    @Column()
    text: string;

    set title(title: string) {
        this._title = title;
    }

    get title(): string {
        return this._title;
    }
}
