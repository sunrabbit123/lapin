import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity()
export class Dummy extends BaseEntity {
    @Column({
        generated: true,
        nullable: false,
        primary: true,
    })
    id: number;

    @Column({ default: "name" })
    name: string;
}
