import {
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
    BaseEntity,
} from "../../../../src";
import { DataModel } from "./DataModel";

@Entity()
export class MainModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany((type) => DataModel, (dataModel) => dataModel.main, {
        cascade: true,
        eager: true,
    })
    dataModel: DataModel[];
}
