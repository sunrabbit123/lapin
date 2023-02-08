import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../../src";

@Entity()
export class FeatureWithoutSRID extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "geometry" })
    shape: string;
}

@Entity()
export class FeatureWithSRID extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "geometry", srid: 2326 })
    shape: string;
}
