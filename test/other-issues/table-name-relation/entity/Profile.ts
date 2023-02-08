import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "../../../../src";

@Entity("profiles")
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    photo: string;
}
