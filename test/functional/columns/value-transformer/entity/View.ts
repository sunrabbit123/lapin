import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../../src";

@Entity()
export class View extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ transformer: [] })
    title: string;
}
