import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Example extends BaseEntity {
    @PrimaryColumn()
    id: Date;

    @Column()
    text: string;
}
