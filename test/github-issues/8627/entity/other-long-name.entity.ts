import { PrimaryGeneratedColumn } from "../../../../src";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
@Entity({
    name: "real_long_name_t2",
})
export class AnotherReallyLongNameForAnEntityBecauseThisIsNecessaryB {
    @PrimaryGeneratedColumn()
    id: number;
}

@Entity({
    name: "real_long_name_t3",
})
export class AnotherRealLongNameForAnEntityBecauseThisIsNecessaryC {
    @PrimaryGeneratedColumn()
    id: number;
}
