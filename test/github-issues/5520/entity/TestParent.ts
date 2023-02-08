import {
    BaseEntity,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { TestChild } from "./TestChild";

@Entity()
export class TestParent extends BaseEntity {
    @OneToOne("TestChild", {
        nullable: true,
        eager: true,
        cascade: true,
    })
    @JoinColumn()
    public child: TestChild;
    @PrimaryGeneratedColumn("uuid")
    public uuid: string;
}
