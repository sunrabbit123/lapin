import { BaseEntity, Entity, PrimaryGeneratedColumn } from "../../../../src";
@Entity({
    name: "real_long_name_t2",
})
export class AnotherReallyLongNameForAnEntityBecauseThisIsNecessaryB extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}

@Entity({
    name: "real_long_name_t3",
})
export class AnotherRealLongNameForAnEntityBecauseThisIsNecessaryC extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
