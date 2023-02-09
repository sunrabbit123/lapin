import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { BaseEntity, Column, Entity } from "../../../../src";

@Entity()
export class ShortTableName extends BaseEntity {
    @PrimaryGeneratedColumn() // typeORM requires a pkey
    PrimaryGeneratedColumnIDBlahBlahBlahThisIsReallyLong: number;

    @Column()
    Name: string;

    @Column()
    Value: number;
}
