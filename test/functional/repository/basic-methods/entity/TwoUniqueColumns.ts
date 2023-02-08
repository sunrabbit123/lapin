import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../../src";

@Entity()
export class TwoUniqueColumnsEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    externalId: string;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;
}
