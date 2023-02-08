import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";

@Entity()
export class ExampleText extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
}
