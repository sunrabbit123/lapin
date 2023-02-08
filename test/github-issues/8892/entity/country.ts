import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryColumn,
} from "../../../../src";
import { Zip } from "./zip";

@Entity()
export class Country extends BaseEntity {
    @PrimaryColumn({ length: 2 })
    code: string;

    @Column()
    caption: string;

    @OneToMany(() => Zip, (zip) => zip.country)
    zips: Zip[];
}
