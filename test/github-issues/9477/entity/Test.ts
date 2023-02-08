import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class Test extends BaseEntity {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;
}
