import { Column, OneToMany, Entity, BaseEntity } from "../../../../src";
import { DataModel } from "./DataModel";

@Entity()
export class ValidationModel extends BaseEntity {
    @Column({
        type: "integer",
        primary: true,
    })
    validation: number;

    @OneToMany((type) => DataModel, (dataModel) => dataModel.validations)
    dataModel: DataModel[];
}
