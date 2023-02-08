import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { TileEntity } from "./TileEntity";

@Entity("activity")
export class ActivityEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: string;

    @Column({ type: "datetime" })
    endDate: Date;

    @ManyToMany((type) => TileEntity, (tile) => tile.activities, {
        cascade: true,
    })
    tiles: TileEntity[];
}
