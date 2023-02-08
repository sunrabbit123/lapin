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

    @Column({ length: 100, nullable: true, default: null })
    first: string;

    @Column({
        length: 100,
        nullable: true,
        default: () => "null",
    })
    second: string;
}
