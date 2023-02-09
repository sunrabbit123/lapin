import { PrimaryColumn, Entity, OneToMany, BaseEntity } from "../../../../src";
import { Month } from "./month";

@Entity()
export class Year extends BaseEntity {
    @PrimaryColumn()
    public yearNo: number;

    @OneToMany((type) => Month, (month) => month.yearNo)
    public month: Month[];
}
