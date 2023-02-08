import { Column } from "../../../../../../src/decorator/columns/Column";
import { BaseEntity } from "../../../../../../src";
import { Information } from "./Information";
import { ExtraInformation } from "./ExtraInformation";

export class Counters {
    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;

    @Column((type) => Information)
    information: Information;

    @Column((type) => ExtraInformation)
    extraInformation: ExtraInformation;
}
