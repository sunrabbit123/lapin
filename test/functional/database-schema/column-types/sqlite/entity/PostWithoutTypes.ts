import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
} from "../../../../../../src";

@Entity()
export class PostWithoutTypes extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    boolean: boolean;

    @Column()
    blob: Buffer;

    @Column()
    datetime: Date;
}
