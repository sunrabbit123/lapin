import { Column, Entity, ObjectID, ObjectIdColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;
}
