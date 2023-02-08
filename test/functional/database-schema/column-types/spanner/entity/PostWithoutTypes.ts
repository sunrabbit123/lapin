import { Column, Entity, PrimaryColumn } from "../../../../../../src";

@Entity()
export class PostWithoutTypes extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    bool: boolean;

    @Column()
    bytes: Buffer;

    @Column()
    timestamp: Date;
}
