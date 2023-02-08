import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int", { array: true, nullable: true })
    skill_id_array: number[];
}
