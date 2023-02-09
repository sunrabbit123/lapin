import { BaseEntity, Entity } from "../../../../src";
import { PrimaryColumn, OneToMany } from "../../../../src";
import { User } from "./User";

@Entity()
export class Role extends BaseEntity {
    @PrimaryColumn()
    id: string;

    @OneToMany((_) => User, (user) => user.role, { cascade: true })
    users: User[];
}
