import { Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
