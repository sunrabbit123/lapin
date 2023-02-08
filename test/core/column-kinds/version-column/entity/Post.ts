import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    VersionColumn,
} from "../../../../../src";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @VersionColumn()
    version: number;
}
