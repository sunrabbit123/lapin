import { City } from "./city";
import {
    BaseEntity,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from "../../../../src";
import { Country } from "./country";

@Entity()
export class Zip extends BaseEntity {
    @PrimaryColumn({ length: 2 })
    countryCode: string;

    @ManyToOne(() => Country, (country) => country.zips)
    country: Country;

    @PrimaryColumn()
    code: string;

    @ManyToMany(() => City, (city: City) => city.zips)
    cities: City[];
}
