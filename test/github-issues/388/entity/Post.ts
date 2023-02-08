import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn({ name: "bla_id" })
    lala_id: string;

    @Column()
    title: string;

    @Column({ name: "my_index" })
    index: number;
}
