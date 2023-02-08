import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created_at: Date;
}
