import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { ManyToMany } from "../../../../src/decorator/relations/ManyToMany";
import { JoinTable } from "../../../../src/decorator/relations/JoinTable";
import { ActivityEntity } from "./ActivityEntity";

@Entity("tile")
export class TileEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: string;

    @ManyToMany((type) => TileEntity, (tile) => tile.children, {
        cascade: ["insert"],
    })
    @JoinTable()
    parents: TileEntity[];

    @ManyToMany((type) => TileEntity, (tile) => tile.parents, {
        cascade: ["insert"],
    })
    children: TileEntity[];

    @ManyToMany((type) => ActivityEntity, (activity) => activity.tiles, {
        cascade: ["insert"],
    })
    @JoinTable()
    activities: ActivityEntity[];
}
