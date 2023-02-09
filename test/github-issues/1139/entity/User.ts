import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
