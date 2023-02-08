import { Entity, BaseEntity } from "../../../../src";
import { ManyToOne } from "../../../../src/decorator/relations/ManyToOne";
import { Dog } from "./Dog";
import { PrimaryGeneratedColumn } from "../../../../src/decorator/columns/PrimaryGeneratedColumn";

@Entity()
export class Cat extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // dogDogID: string; // Need to do this to allow the Foreign Key to work

    @ManyToOne((type) => Dog, (dog) => dog.cats)
    dog: Dog;
}
