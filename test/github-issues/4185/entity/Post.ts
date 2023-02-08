import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
import { BaseEntity } from "../../../../src";
import { LoadEvent } from "../../../../src/subscriber/event/LoadEvent";

@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    simpleSubscriberSaw?: boolean;
    extendedSubscriberSaw?: LoadEvent<Post>;
}
