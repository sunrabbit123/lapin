import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
} from "../../../../src";

@Entity()
export class Example extends BaseEntity {
    @PrimaryColumn()
    id: Date;

    @Column()
    text: string;
}
