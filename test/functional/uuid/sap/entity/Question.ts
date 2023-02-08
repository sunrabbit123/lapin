import { Entity } from "../../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Column } from "../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../src";

import { Generated } from "../../../../../src/decorator/Generated";

@Entity()
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column()
    uuid2: string;

    @Column("nvarchar", { nullable: true })
    uuid3: string | null;

    @Column("nvarchar", { nullable: true })
    @Generated("uuid")
    uuid4: string | null;
}
