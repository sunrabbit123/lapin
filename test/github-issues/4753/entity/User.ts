import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
} from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
