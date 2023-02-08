import { Entity } from "../../../../src/decorator/entity/Entity";
import { Column } from "../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

import { Gender } from "./GenderEnum";

@Entity()
export class Human extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: Gender,
        enumName: "genderEnum",
        name: "Gender",
    })
    gender: Gender;
}
