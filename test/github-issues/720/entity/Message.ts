import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn("increment", { type: "bigint" })
    id: string;
}
