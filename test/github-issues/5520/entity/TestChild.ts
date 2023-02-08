import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class TestChild extends BaseEntity {
    @Column()
    public value: string;
    @PrimaryGeneratedColumn("uuid")
    public uuid: string;
}
