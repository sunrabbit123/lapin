import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";

@Entity({ synchronize: false })
export class Photo {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    albumId: number;
}
