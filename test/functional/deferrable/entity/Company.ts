import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { Unique } from "../../../../src/decorator/Unique";

@Entity()
@Unique(["name"], { deferrable: "INITIALLY DEFERRED" })
export class Company {
    @PrimaryColumn()
    id: number;

    @Column()
    name?: string;
}
