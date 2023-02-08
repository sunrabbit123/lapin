import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";

import { WrappedNumber, transformer } from "../transformer";

@Entity()
export class Dummy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: Number, transformer })
    num: WrappedNumber;
}
