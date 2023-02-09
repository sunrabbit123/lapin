import { BaseEntity, Column, Entity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

import { Gender } from "./GenderEnum";

@Entity()
export class Animal extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: Gender,
        enumName: "genderEnum",
    })
    gender: Gender;

    @Column()
    specie: string;
}
