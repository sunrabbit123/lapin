import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../src";

@Entity("sample13_post_user")
export class PostUser extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    name: string;

    @Column()
    firstName: string;

    @Column()
    secondName: string;
}
