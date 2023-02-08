import { Entity, PrimaryGeneratedColumn } from "../../../../../../src";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
