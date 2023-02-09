import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Personalization } from "./Personalization";

@Entity()
export class Provider extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") public id: string;

    @Column() public name: string;

    @Column() public description: string;

    @OneToOne((_) => Personalization)
    @JoinColumn()
    public personalization: Personalization;
}
