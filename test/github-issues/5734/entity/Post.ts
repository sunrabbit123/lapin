import { PrimaryColumn } from "../../../../src/decorator/columns/PrimaryColumn";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "../../../../src";
@Entity()
export class Post extends BaseEntity {
    @PrimaryColumn()
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}
