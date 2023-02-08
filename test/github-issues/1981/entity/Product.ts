import { Column, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    liked: boolean;
}
