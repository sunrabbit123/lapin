import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

@Entity()
export class Foo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        array: true,
        type: "varchar",
        length: 64,
        nullable: true,
    })
    varchararray: string[];
}
