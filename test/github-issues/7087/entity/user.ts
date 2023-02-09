import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity({ name: "users", synchronize: false })
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number;
}
