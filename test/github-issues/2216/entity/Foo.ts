import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity("foo")
export class Foo extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") public uuid: string;

    @Column({ type: "citext", nullable: false })
    public lowercaseval: string;

    @Column({ type: "citext", nullable: false })
    public lowercaseval2: string;
}
