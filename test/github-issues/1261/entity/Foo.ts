import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";
@Entity()
export class Foo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
