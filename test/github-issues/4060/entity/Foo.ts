import { BaseEntity, Column, Entity, PrimaryColumn } from "../../../../src";
@Entity()
export class Foo extends BaseEntity {
    @PrimaryColumn({ type: "varbinary", length: 16 })
    id: Buffer;

    @Column()
    name: string;
}
