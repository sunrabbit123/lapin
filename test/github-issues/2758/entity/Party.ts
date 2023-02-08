import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Party extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
