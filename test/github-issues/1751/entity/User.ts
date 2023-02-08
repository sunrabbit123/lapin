import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("varchar")
    email = "";

    @Column("varchar")
    avatarURL = "";
}
