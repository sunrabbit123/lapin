import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    name: string;
}
