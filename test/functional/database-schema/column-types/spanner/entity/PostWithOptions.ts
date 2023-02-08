import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
} from "../../../../../../src";

@Entity()
export class PostWithOptions extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({ length: 50 })
    string: string;

    @Column({ length: 50 })
    bytes: Buffer;
}
