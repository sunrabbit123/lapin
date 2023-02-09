import {
    Entity,
    PrimaryColumn,
    ManyToMany,
    JoinTable,
    BaseEntity,
} from "../../../../src";
import { UsersObject } from "./usersObject";

@Entity("User")
export class User extends BaseEntity {
    @PrimaryColumn({ type: "varbinary", length: 16 })
    id!: Buffer;

    @ManyToMany(() => UsersObject, (obj: UsersObject) => obj.id, {
        cascade: false,
    })
    @JoinTable()
    objects!: UsersObject[];
}
