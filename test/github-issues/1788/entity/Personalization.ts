import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Personalization extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") public id: number;

    @Column() public logo: string;
}
