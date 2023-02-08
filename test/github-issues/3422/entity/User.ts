import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Tree } from "../../../../src/decorator/tree/Tree";
import { TreeChildren } from "../../../../src/decorator/tree/TreeChildren";
import { TreeParent } from "../../../../src/decorator/tree/TreeParent";

@Entity({ name: "users", schema: "admin" })
@Tree("nested-set")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @TreeParent()
    public manager: User;

    @TreeChildren()
    public managerOf: User[];
}
