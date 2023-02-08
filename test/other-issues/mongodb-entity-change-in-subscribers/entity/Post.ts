import { BaseEntity, Column, Entity } from "../../../../src";
import { UpdateDateColumn } from "../../../../src/decorator/columns/UpdateDateColumn";
import { ObjectID, ObjectIdColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column()
    active: boolean = false;

    @UpdateDateColumn()
    updateDate: Date;

    @Column()
    updatedColumns: number | string[] = 0;

    loaded: boolean = false;
}
