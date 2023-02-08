import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { CreateDateColumn } from "../../../../src/decorator/columns/CreateDateColumn";
import { UpdateDateColumn } from "../../../../src/decorator/columns/UpdateDateColumn";
import { VersionColumn } from "../../../../src/decorator/columns/VersionColumn";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @CreateDateColumn()
    createDate: string;

    @UpdateDateColumn()
    updateDate: string;

    @Column({ default: 100 })
    order: number;

    @VersionColumn()
    version: number;

    @Column({ default: 0 })
    triggerValue: number;
}
