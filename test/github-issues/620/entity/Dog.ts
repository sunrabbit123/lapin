import { Entity, BaseEntity } from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import { OneToMany } from "../../../../src/decorator/relations/OneToMany";
import { Cat } from "./Cat";

@Entity()
export class Dog extends BaseEntity {
    @PrimaryColumn()
    DogID: string;

    @OneToMany((type) => Cat, (cat) => cat.dog)
    cats: Cat[];
}
