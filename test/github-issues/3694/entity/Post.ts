import { Entity, PrimaryGeneratedColumn } from "../../../../src";
import { FruitEnum } from "../enum/FruitEnum";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("enum", { enum: FruitEnum, default: FruitEnum.Apple })
    fruit: FruitEnum;
}
