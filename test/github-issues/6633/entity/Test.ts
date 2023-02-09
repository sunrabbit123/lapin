import {
    Entity,
    PrimaryColumn,
    Index,
    Column,
    BaseEntity,
} from "../../../../src";

@Entity()
export class Test extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Index("description_index", { fulltext: true })
    @Column()
    description: string;
}
