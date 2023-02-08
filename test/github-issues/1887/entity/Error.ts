import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity("Error")
export class Error extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("uniqueidentifier", { nullable: false })
    executionGuid: string;

    @Column()
    errorNumber: number;

    @Column()
    errorDescription: string;

    @Column()
    errorDate: Date;
}
