import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BaseEntity,
} from "../../../../src";

@Entity()
export class Example extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @CreateDateColumn({ type: "datetime" })
    created?: Date;

    @Column("varchar", { length: 10 })
    content: string = "";

    @Column("char", { length: 10 })
    fixedLengthContent: string = "";
}
