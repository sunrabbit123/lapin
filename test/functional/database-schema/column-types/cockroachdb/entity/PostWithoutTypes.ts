import { BaseEntity, Entity } from "../../../../../../src";
import { PrimaryColumn } from "../../../../../../src";
import { Column } from "../../../../../../src";

@Entity()
export class PostWithoutTypes extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    boolean: boolean;

    @Column()
    datetime: Date;
}
