import { PrimaryGeneratedColumn } from "../../../../src";
import { Entity } from "../../../../src";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
