import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";
@Entity({ name: "users", synchronize: false })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number;
}
