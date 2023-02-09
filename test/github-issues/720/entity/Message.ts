import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";
@Entity()
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn("increment", { type: "bigint" })
    id: string;
}
