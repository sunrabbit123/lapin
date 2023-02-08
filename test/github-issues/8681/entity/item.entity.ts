import {
    BaseEntity,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { Thing } from "./thing.entity";

@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Thing, (thing) => thing.items)
    thing!: Thing;
}
