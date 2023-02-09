import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
import { Index } from "../../../../src/decorator/Index";

@Index("Groups name", ["name"], { unique: true })
@Entity("groups")
export class Group extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
}
