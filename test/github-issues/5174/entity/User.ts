import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryColumn, ManyToOne } from "../../../../src";
import { Role } from "./Role";

@Entity()
export class User extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @ManyToOne((_) => Role, (role) => role.users)
    role: Role;
}
