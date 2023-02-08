import {
    ChildEntity,
    Column,
    Entity,
    PrimaryColumn,
    TableInheritance,
} from "../../../../src";

@TableInheritance({ column: "type" })
@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    type: string;
}

@ChildEntity("sub")
export class SubUser extends User {
    @Column()
    anotherColumn: number;
}
