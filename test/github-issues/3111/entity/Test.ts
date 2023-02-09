import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

export const DEFAULT_VALUE = "default-value";

@Entity()
export class Test extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: DEFAULT_VALUE })
    value: string;
}
