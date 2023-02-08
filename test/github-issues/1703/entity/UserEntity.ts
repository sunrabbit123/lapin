import {
    BaseEntity,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { UserToOrganizationEntity } from "./UserToOrganizationEntity";

@Entity("user")
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToMany(
        (type) => UserToOrganizationEntity,
        (userToOrganization) => userToOrganization.user,
    )
    organizations: UserToOrganizationEntity[];
}
