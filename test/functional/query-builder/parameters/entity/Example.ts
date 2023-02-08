import { Entity, PrimaryColumn } from "../../../../../src";

@Entity()
export class Example extends BaseEntity {
    @PrimaryColumn()
    id: string;
}
