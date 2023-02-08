import { Entity, PrimaryGeneratedColumn } from "../../../../../../src";

@Entity()
export class Name extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
