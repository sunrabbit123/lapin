import {
    BaseEntity,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { UserToOrganizationEntity } from "./UserToOrganizationEntity";

@Entity("organizations")
export class OrganizationEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToMany(
        (type) => UserToOrganizationEntity,
        (userToOrganization) => userToOrganization.organization,
    )
    users: UserToOrganizationEntity[];
}
