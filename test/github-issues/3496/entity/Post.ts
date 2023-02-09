import { BaseEntity, Entity } from "../../../../src";
import { PrimaryGeneratedColumn } from "../../../../src";
import { Column, VersionColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @VersionColumn()
    version: number;

    @Column({ type: "jsonb" })
    problems: object;
}
