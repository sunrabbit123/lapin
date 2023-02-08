import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "../../../../src";

export class LatLong {
    @Column()
    latitude: number;

    @Column()
    longitude: number;
}

export class Address {
    @Column(() => LatLong)
    latLong: LatLong;
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column(() => Address)
    address: Address;

    @Column()
    age: number;
}
