import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class Dummy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, default: () => "GETDATE()" })
    UploadDate: string;
}
