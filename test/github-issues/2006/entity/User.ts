import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { nullable: true })
    token: string | null = null;

    @Column({
        type: "tinyint",
        default: 0,
        width: 1,
    })
    dnd: boolean = false;
}
