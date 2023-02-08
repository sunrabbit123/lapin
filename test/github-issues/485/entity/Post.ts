import { Entity } from "../../../../src/decorator/entity/Entity";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}
