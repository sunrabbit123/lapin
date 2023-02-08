import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class ChildEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: string;
}
