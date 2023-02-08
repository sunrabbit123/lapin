import {
    AfterRemove,
    BaseEntity,
    BeforeInsert,
    Column,
    Entity,
    PrimaryColumn,
} from "../../../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    isRemoved: boolean = false;

    @BeforeInsert()
    beforeInsert() {
        this.title += "!";
    }

    @AfterRemove()
    afterRemove() {
        this.isRemoved = true;
    }
}
