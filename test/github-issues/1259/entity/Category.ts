import { Entity, PrimaryGeneratedColumn } from "../../../../src/index";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
